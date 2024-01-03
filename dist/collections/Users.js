"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
// const adminsAndUser: Access = ({ req: { user } }) => {
//   if (user.role === 'admin') return true
//   return {
//     id: {
//       equals: user.id,
//     },
//   }
// }
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                // return PrimaryActionEmailHtml({
                //   actionLabel: "verify your account",
                //   buttonText: "Verify Account",
                //   href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
                // });
                return "<a href=".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/verify-email?token=").concat(token, ">please verify </a>");
            },
        },
    },
    // access: {
    //   read: adminsAndUser,
    //   create: () => true,
    //   update: ({ req }) => req.user.role === "admin",
    //   delete: ({ req }) => req.user.role === "admin",
    // },
    access: {
        read: function () { return true; },
        create: function () { return true; },
    },
    // admin: {
    //   hidden: ({ user }) => user.role !== "admin",
    //   defaultColumns: ["id"],
    // },
    fields: [
        //   {
        //     name: "products",
        //     label: "Products",
        //     admin: {
        //       condition: () => false,
        //     },
        //     type: "relationship",
        //     relationTo: "products",
        //     hasMany: true,
        //   },
        //   {
        //     name: "product_files",
        //     label: "Product files",
        // admin: {
        //   condition: () => false,
        // },
        //     type: "relationship",
        //     relationTo: "product_files",
        //     hasMany: true,
        //   },
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
    ],
};
