# Obtener Préstamos 

Método para obtener un listado de los productos de préstamo de un cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerPrestamos | RBTPG011 | Global 

### Configuración Backend 

1) Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 50 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

2) Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 50 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir. 

> Ejemplo de invocación al método Obtener Obtener Préstamos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPrestamos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
      </bts:BTClientes.ObtenerPrestamos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 4 
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
      <BTClientes.ObtenerPrestamosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPrestamos> 
            <sBTProductoPrestamo> 
               <operacionUId>1</operacionUId> 
               <idOperacionFmt>0000000170-000</idOperacionFmt> 
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
               <saldo>87128.11</saldo> 
               <estado/> 
            </sBTProductoPrestamo> 
            <sBTProductoPrestamo> 
               <operacionUId>2</operacionUId> 
               <idOperacionFmt>0000000080-000</idOperacionFmt> 
               <idOperacionBT>0010100000101000000000000000002700000000000080001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <saldo>124195.84</saldo> 
               <estado/> 
            </sBTProductoPrestamo> 
            <sBTProductoPrestamo> 
               <operacionUId>361</operacionUId> 
               <idOperacionFmt>0000000412-000</idOperacionFmt> 
               <idOperacionBT>0010100000101000000000000000002700000000000412003</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <saldo>100000.00</saldo> 
               <estado/> 
            </sBTProductoPrestamo> 
         </sdtProductosPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>785</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerPrestamos</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>16:07:38</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPrestamosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtProductosPrestamos": { 
        "sBTProductoPrestamo": [ 
            { 
                "saldo": "87128.11", 
                "sucursal": "Sucursal Beta", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad" 
                }, 
                "idOperacionBT": "0010000100101000000000000000002700000000000170003", 
                "operacionUId": "1", 
                "idOperacionFmt": "0000000170-000", 
                "estado": "" 
            }, 
            { 
                "saldo": "124195.84", 
                "sucursal": "Casa Matriz", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
                }, 
                "idOperacionBT": "0010100000101000000000000000002700000000000080001", 
                "operacionUId": "2", 
                "idOperacionFmt": "0000000080-000", 
                "estado": "" 
            }, 
            { 
                "saldo": "100000.00", 
                "sucursal": "Casa Matriz", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad" 
                }, 
                "idOperacionBT": "0010100000101000000000000000002700000000000412003", 
                "operacionUId": "361", 
                "idOperacionFmt": "0000000412-000", 
                "estado": "" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerPrestamos", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "16:35:22", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductosPrestamos | sBTProductoPrestamo | Listado de préstamos. 

Los campos del tipo de dato estructurado sBTProductoPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal. 
saldo | Double | Capital. 
estado | String | Descripción de estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el identificador. 

 
