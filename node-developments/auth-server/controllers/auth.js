// Opcional
const {response} = require('express');
const { validationResult } = require('express-validator');

var xmlrpc = require('xmlrpc');

const crearUsuario = (req, res = response)=>{

    const { email, name, password } = req.body;
    console.log("Creando usuarios", email, name, password);
    return res.json({
        ok: true,
        msg: "Crear usuario /new"
    })
}


const crearProducto = (req, res = response)=>{

    console.log("Creando Producto", req.body);
    return res.json({
        ok: true,
        _id: "984379847983794873984"
    })
}


const editarProducto = (req, res = response)=>{

    console.log("Editando Producto", req.body);
    return res.json({
        ok: true
    })
}


const eliminarProducto = (req, res = response)=>{

    console.log("Elimnando producto", req.body);
    return res.json({
        ok: true
    })
}




const login = (req, res=response)=>{

    // Verificando las validaciones de los campos
    const errors = validationResult(req);
    
    // Si existe algun tipo de error se informa en la respuesta
    if (!errors.isEmpty()){
        return res.status(404).json({
            ok: false,
            errores: errors.mapped()
        });
    }

    const { email, password } = req.body;
    // console.log("Login", email, password);

    return res.json({
        ok: true,
        msg: "Login de usuario"
    })
}

const revalidarToken =  (req, res=response)=>{

    console.log("Probando, probando");

    var odoo_common = xmlrpc.createClient('http://rokeedooit:8070' +'/xmlrpc/2/common');

    odoo_common.methodCall('login', ["yeet", "admin", "admin"], (error, value) => {
        if(error){
          reject(error); // Si causa un error retorno la respuesta
        }
        else{
          if(value == false){
            console.log("Usuario incorrecto"); // Colocar un alert
            
            // resolve(false); // Indicando que el usuario es incorrecto

            return res.json({
                ok: true,
                msg: "Renew"
            })
          }
          else{
            console.log("Usuario autenticado, UID: ", value); 
            // this.credentials.uid = value; // guardando el UID para las proximas consultas
            // resolve(true); // indicando que el usuario es correcto 

                return res.json({
                    ok: true,
                    msg: "Renew"
                })
          }
        }
      });


}


module.exports = {
    crearUsuario,
    login,
    revalidarToken,
    crearProducto,
    editarProducto,
    eliminarProducto
}