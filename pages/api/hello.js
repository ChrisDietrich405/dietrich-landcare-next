// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import build from "next/dist/build"

export const handler(req, res) {
  res.status(200).send("hello")
}



// hello . js is an endpoint, Nextjs provides us the ability to build
// endpoints with not a lot of code. Next js replaces node js and express 
// it's a form of abstraction away from node and express
