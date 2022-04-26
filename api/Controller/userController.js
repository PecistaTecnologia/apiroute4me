const r4m = require('../Models/r4m2s');


const usercontroller = 

product(req, res) 

    const event = req.body;
    if(event.activity_type != 'route-optimized' ) {
      res.status(404).json({
        error: true,
        message: "requisição invalida"
      })
    }else{
      res.status(200).json({
        error: false,
        message: "requisição valida"
      })
}

        const { route_id } = req.body;
          //{ CD_LOJA, DT_ROTA, CODCLI,  NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO } = rota;
          

        const data = { ROUTE_ID: route_id }
          //{ CD_LOJA, DT_ROTA, CODCLI, NOMECLI, TRACKING_NUMBER, ROUTE_ID, ROUTE_DESTINATION_ID, API_KEY, PEDIDO }
      
    /** 
      * Inserir dados no banco Mysql
      */
       
      await r4m.create(data, (err) => {
          if(err)
          return res.status(400).json({
            error: true,
            message: "Error ao inserir no banco de dados"
          })

          return res.status(200).json({
            errr: false,
            message: "Inserido com sucesso!"
          })
        })  
module.exports = usercontroller();
