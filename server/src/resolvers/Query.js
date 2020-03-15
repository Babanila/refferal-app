async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
          { postedBy_contains: args.filter }
        ]
      }
    })
    .aggregate()
    .count();

  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
        { postedBy_contains: args.filter }
      ]
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  return {
    count,
    links
  };
}

async function user(parent, args, context) {
  const count = await context.prisma
    .usersConnection({
      where: {
        OR: [
          { firstname_contains: args.filter },
          { lastname_contains: args.filter },
          { email_contains: args.filter },
          { refferalLink_contains: args.filter }
        ]
      }
    })
    .aggregate()
    .count();

  const users = await context.prisma.users({
    where: {
      OR: [
        { firstname_contains: args.filter },
        { lastname_contains: args.filter },
        { email_contains: args.filter },
        { refferalLink_contains: args.filter }
      ]
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  });

  return {
    count,
    users
  };
}

module.exports = {
  feed,
  user
};
