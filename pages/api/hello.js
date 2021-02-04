// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const date = new Date();

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  res.status(200).json({
    date: date.toUTCString(),
  });
  // res.status(200).json({ name: 'John Doe' })
}
