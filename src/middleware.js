export { default } from "next-auth/middleware"

// matcher untuk route mana yang ingin di protect. :path* berfungsi untuk semua route yang dibungkus oleh path users
export const config = { matcher: ["/users/:path*"] }