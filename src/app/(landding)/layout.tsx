import React from 'react'

function layout({children}:any) {

  return (

<html lang="en">
<head>
    <meta />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    {children}
</body>
</html>
  )
}

export default layout
