# Obtener Bolsillos 

Método para consulta de cuentas bolsillo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerBolsillos | RBTPG614 | Global 

> Ejemplo de invocación al servicio de Obtener Bolsillos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerBolsillos> 
         <bts:Btinreq> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>64d9fe0781F955E77534D3E0</bts:Token> 
            <bts:Requerimiento>10</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerBolsillos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerBolsillos' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cFC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
   "operacionUId": 9, 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasVista.ObtenerBolsillosResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>10</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>64d9fe0781F955E77534D3E0</Token> 
         </Btinreq> 
         <sdtInformacionBolsillos> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>8</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>32</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>21981.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>11</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>32</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>4000.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>10</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>33</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos Imprevistos</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>4000.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
         </sdtInformacionBolsillos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>238</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerBolsillos</Servicio> 
            <Requerimiento>10</Requerimiento> 
            <Fecha>2023-11-01</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>08:52:10</Hora> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerBolsillosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtInformacionBolsillos": { 
      "SBTINFRBOLSILLO": [ 
         { 
         "OperacionBolsilloUID": 8, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 21981, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 11, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 10, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 33, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos Imprevistos", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         } 
      ] 
   }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerBolsillos", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtInformacionBolsillos | sBTInfRBolsillo | Listado de la información del bolsillo. 

Los campos del tipo de dato estructurado sBTInfRBolsillo son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionBolsilloUID | Long | Identificador único de la operación de bolsillo. 
fechaBaja | Date | Fecha de la baja. 
productoBolsilloId | Short | Identificador único del producto del bolsillo. 
nombreProducto | String | Nombre del producto. 
fechaApertura | Date | Fecha de apertura. 
saldo | Double | Saldo. 
estado | Byte | Estado. 
nombreSubcuenta | String | Nombre de la subcuenta. 

### Errores 

Código | Descripción 
--------- | ----------- 
30003 | No se recibió el identificador de operación. 
30005 | OperacionUID no corresponde a CA. 
30006 | La cuenta no existe o no se encuentra activa. 

 
