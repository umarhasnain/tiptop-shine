import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      email,
      newEmail,
      currentPassword,
      newPassword,
      phone,
      alternatePhone,
    } = body;

    // ================= VALIDATION =================
    if (!email) {
      return Response.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    // ================= FIND USER =================
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // ================= EMAIL UPDATE CHECK =================
    if (newEmail && newEmail !== email) {
      const emailExists = await User.findOne({
        email: newEmail,
      });

      if (emailExists) {
        return Response.json(
          {
            success: false,
            error: "Email already in use",
          },
          { status: 400 }
        );
      }

      user.email = newEmail;
    }

    // ================= PASSWORD UPDATE =================
    if (newPassword) {
      if (!currentPassword) {
        return Response.json(
          {
            success: false,
            error: "Current password required",
          },
          { status: 400 }
        );
      }

      const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isMatch) {
        return Response.json(
          {
            success: false,
            error: "Current password is incorrect",
          },
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(
        newPassword,
        10
      );

      user.password = hashedPassword;
    }

    // ================= UPDATE CONTACT FIELDS =================
    if (phone !== undefined) {
      user.phone = phone;
    }

    if (alternatePhone !== undefined) {
      user.alternatePhone = alternatePhone;
    }

    // ================= SAVE =================
    await user.save();

    // remove password before sending response
    const safeUser = user.toObject();
    delete safeUser.password;

    return Response.json({
      success: true,
      message: "Account updated successfully 🚀",
      user: safeUser,
    });
  } catch (error) {
    console.log("ACCOUNT UPDATE ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}