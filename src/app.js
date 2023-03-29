// express // Frame  nodejs 

// (crud operations)
// create  =>  post
// read    =>  get
// Update  =>  patch
// delete  =>  delete 

// Local host 
// D // www.amazon.com 

// localhost :  port  3000  5000   

////////////////////////////////////////////////////////////////////////////////

    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

    // app.get('/', (req, res) => {
    //     res.send('Hello World!')
    //    })

    app.get('/about', (req, res) => {
        res.send('This is data in about Page ')
       })

    //    app.get('/service', (req, res) => {
    //     res.send('This is data in SERVICE PAGE ')
    //    })

    //    app.get('/team', (req, res) => {
    //     res.send('<h2> Islam Mohamed </h2>  <button> Send </button>')
    //    })

       app.get('/data1', (req, res) => {
        res.send({
            name : "ahmed",
            age : 20,
            city : "Cairo"
        })
       })

       app.get('/data2', (req, res) => {
        res.send({
            name : "Islam",
            age : 26,
            city : "Mansoura"
        })
       })

/////////////////////////////////////////////////////////////////////////////////
     
    // Static 
    // path 

    // modules :  
                
    // const path = require ("path")
    // const x =  path.join(__dirname , '../public')
    // app.use (express.static (x))

    // console.log(__dirname)
    //C:\Users\DELL\Desktop\Lec-5-node\src

    //C:\Users\DELL\Desktop\Lec-5-node\
    // console.log(path.join(__dirname , '../public')) // C:\Users\DELL\Desktop\Lec-5-node\public

/////////////////////////////////////////////////////////////////////////////////////////////////////////

    // hbs 

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

      //////////////////////////////////////////////////////////////////

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

      ///////////////////////////////////////////////////////////////////
      app.get('/' , (req , res) => {                                  
        res.render('index' , {     
            name  : "Name" ,                               
            company   : "company" ,        
            numberproduct  : "numberproduct" ,
            types : "types",
            prices : "prices" ,
            sales : "sales ", 
            bestproducts : "bestproducts"  
        })          
    })                                                      
     


      
      


    app.get('/temp1/views/bag-one.hbs' , (req , res) => {
        res.render('bag-one' , {
            title1: "Genuine Makeup",
            prices1:"30,000",
            title2: "polka dots bag",
            prices2:"40,000",
            title3: "white bag",
            prices3:"35,000",
            title4: "Cubic bag",
            prices4:"6,000",
            title5: "SHANY REBEL ",
            prices5:"55,000",
            title6: "Rectangular bag",
            prices6:"44,000",
            title7: "transparent bag",
            prices7:"23,000",
            title8: "Striped bag",
            prices8:"45,000"

        })
    })

    app.get('/temp1/views/lipstick-two.hbs' , (req , res) => {
        res.render('lipstick-two' , {
            title1: "brown liquid lip",
            prices1:"30,000",
            title2: "lip two-headed",
            prices2:"40,000",
            title3: "glossy lip",
            prices3:"35,000",
            title4: "lip glossy brown",
            prices4:"6,000",
            title5: "glossy lip ",
            prices5:"55,000",
            title6: "Brown glossy lip",
            prices6:"44,000",
            title7: "glose lipstick",
            prices7:"23,000",
            title8: "Brown lipstick",
            prices8:"45,000"
        })
    })

    app.get('/temp1/views/macker-three.hbs' , (req , res) => {
        res.render('macker-three' , {
            title1: "Orange mascara",
            prices1:"30,000",
            title2: "Essence Mascara",
            prices2:"40,000",
            title3: "Orange mascara",
            prices3:"35,000",
            title4: "Covergirl Lash Blast",
            prices4:"6,000",
            title5: "Essence Mascara&liqueur ",
            prices5:"55,000",
            title6: "Brown Mascara",
            prices6:"44,000",
            title7: "Brown sessive",
            prices7:"23,000",
            title8: " black mascara",
            prices8:"45,000"
        })
    })

    
    app.get('/temp1/views/poder-four.hbs' , (req , res) => {
        res.render('poder-four' , {
            title1: "Covergirl powder ",
            prices1:"30,000",
            title2: "loose powder",
            prices2:"40,000",
            title3: " Elf Powder",
            prices3:"35,000",
            title4: "super powder ",
            prices4:"6,000",
            title5: "Witewild powder ",
            prices5:"55,000",
            title6: "StayMatte powder",
            prices6:"44,000",
            title7: "Formular powder",
            prices7:"23,000",
            title8: "REvoln powder",
            prices8:"45,000"
        })
    })

    
    app.get('/temp1/views/cream-five.hbs' , (req , res) => {
        res.render('cream-five' , {
            title1: "Nude cream",
            prices1:"30,000",
            title2: "Life cream ",
            prices2:"40,000",
            title3: "Heathy cream",
            prices3:"35,000",
            title4: "Elf cream",
            prices4:"6,000",
            title5: "Elf cream ",
            prices5:"55,000",
            title6: "Lomo cream",
            prices6:"44,000",
            title7: "Dur cream",
            prices7:"23,000",
            title8: "Infallbia cream",
            prices8:"45,000"
        })
    })


    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
////////////////////////////////////////////////////////////////////////////////

  //  5 
  //  header   footer 

  // 6 :             50

  // 3    front    back   full 
