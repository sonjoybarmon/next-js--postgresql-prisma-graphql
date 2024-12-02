const resolvers = {
  Query: {
    links: async (_parent: any, _args: any, ctx: any) =>
      await ctx.prisma.link.findMany(),
  },
};

export default resolvers;
