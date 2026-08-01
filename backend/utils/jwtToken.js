export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,

    // Use secure cookies in production
    secure: process.env.NODE_ENV === "production",

    // Allow cookies between Vercel and Render
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};