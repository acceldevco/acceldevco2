const commander = require("commander");
const { writeFileSync, mkdir, mkdirSync, access } = require("fs");
const hbs = require("handlebars");

var p = require("child_process");

commander
  .version("1.0.0", "-v, --version")
  .usage("[OPTIONS]...")
  .option("-pa, --pages <value>", "Detects if the flag is present.", null)
  .option("-c, --components <value>", "Overwriting value.", null)
  .option("-p, --props <value>", "Props value.", null)
  .option("-r, --routes <value>", "Routes value.", null)
  .option("-ro, --routers <value>", "Routers value.", null)
  .option("-si, --single <value>", "Singles value.", null)
  .parse(process.argv);

const options = commander.opts();
console.log(options);

("--pages <value> --components <value> --routes <value> --props <value> --routers <value>");

const cmp = `
import React from 'react'

function page(${
  options.props?.split(",") === undefined ? "" : `{${options.props}}:any`
}) {
  return (
    <div>
      
    </div>
  )
}

export default page`;

// console.log(cmp);
var te = "src/app/";
var te2 = "src/app/";
var cm = "src/app/component";
var ro = "src/app/routes";
const lay = `
import React from 'react'

function layout({children}:any) {
  return (
<>
    {children}
</>
  )
}
export default layout
`;
//writeFileSync('',lay)
const page = `
import React, { useState } from 'react';
import axios from 'axios';
${
  options.components
    ? `${options.components
        ?.split(",")
        .map(
          (d) =>
            `import ${
              d.split("/")[0].charAt(0).toUpperCase() + d.split("/")[0].slice(1)
            } from "@/components/${d}"`
        )
        .join(";\n")}`
    : ""
}

function page(param:any) {
//var[data,setdata]=useState('');
  function get(params:any) {
    //axios.get("/api/cart").then((d:any)=>{
    //  setdata('')
    //  })
  }
  return (
<>
    
</>
  )
}
export default page
`;
const  rou=(data) => `
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
const prisma = new PrismaClient();

export async function POST(request: NextRequest, res: NextResponse){
  try {
    const reqBody = await request.json();
      return NextResponse.json({ reqBody });
      } catch (error: any) {


}
      }

export async function GET(request: NextRequest, res: NextResponse){
  try {
    const reqBody = await request.json();
     

    const results = await prisma.${data}.findMany({
      skip: reqBody.skip,
      take: reqBody.take,
    });
    return NextResponse.json({ data: results });

    
      } catch (error: any) {
}
}
`;
if (options.components) {
  [...options.pages.split(",")].reduce(
    (d, i) => {
      if (d[d.length - 1] !== i) {
        cm += `${i}/`;
      }
      if (d[d.length - 1] === i) {
        p.execSync(
          `mkdir "${cm}/" && touch "${cm}${i}.tsx"`,
          function (err, stdout, stderr) {
            if (err) {
              console.log("\n" + stderr);
            } else {
              console.log(stdout);
            }
          }
        );
      }
      return d;
    },
    [...options.pages.split(",")]
  );

}

if (options.pages) {
  const test = `
  import React, { useState } from 'react';
  import axios from 'axios';
  `;
  [...options.pages.split(",")].reduce(
  (d, i) => {
      if (d[d.length - 1] !== i) {
        te += `${i}/`;

      }
      if (d[d.length - 1] === i) {
        p.exec(
          `mkdir "${te}/" && mkdir "src/app/routes/${i}"`,
          function (err, stdout, stderr) {
            if (err) {
              console.log("\n" + stderr);
            } else {
              console.log(stdout);
              writeFileSync(`./${te}${i}.tsx`,page)
              writeFileSync(`${te}layout.tsx`,lay)
              writeFileSync(`./src/app/routes/${i}/page.tsx`, rou(i));
            }
          }
        );
        
// await 
      }
      return d;
    },
    [...options.pages.split(",")]
  );
  if (options.routes) {
    
    // writeFileSync("programming.tsx", rou);
  }
}


const tet = {
  name: {
    user: {
      API: {
        GET: 1,
        DELETE: 1,
      },
      PAGE: { data: "axios,lazy", valid: 1 || 0, layout: 1 },
      compo: {
        cart: 0,
        form: 0,
        lazy: 1,
      },
    },
  },
  valid: {
    ["login,register"]: {
      API: {},
      compo: {
        lazy: 1,
      },
    },
    dashboard: {
      layout: 1,
      API: {
        GET: 1,
        DELETE: 1,
      },
      compo: {
        lazy: 1,
      },
    },
  },
};
