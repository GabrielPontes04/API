# Obtener Cuentas Asociadas 

Método para obtener las cuentas a las que está asociada una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerCuentasAsociadas | RBTPG017 | Global 

> Ejemplo de invocación al método Obtener Cuentas Asociadas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>3</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadas=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: bdcb7be8-1291-68f0-58ec-504b3f3e8fc5' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 3 
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
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentasAsociadasTD> 
            <cuentas> 
               <sBDCuentaAsociadaTD> 
                  <operacionUId>101</operacionUId> 
                  <idOperacionFmt>000000040_005</idOperacionFmt> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                     <moneda>$</moneda> 
                     <papel/> 
                  </producto> 
                  <sucursal>Casa Matriz</sucursal> 
                  <simboloMoneda>$</simboloMoneda> 
                  <subCuenta/> 
                  <saldo>100.00</saldo> 
                  <estado>Normal</estado> 
               </sBDCuentaAsociadaTD> 
            </cuentas> 
            <tarjetaUId>3</tarjetaUId> 
         </sdtCuentasAsociadasTD> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>975</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadas</Servicio> 
            <Fecha>2017-12-22</Fecha> 
            <Requerimiento/> 
            <Hora>13:14:14</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse> 
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
   "sdtCuentasAsociadasTD": { 
      "cuentas": { 
         "sBDCuentaAsociadaTD": [ { 
            "saldo": "100.00", 
            "simboloMoneda": "$", 
            "sucursal": "Casa Matriz", 
            "producto": { 
               "papel": "", 
               "moneda": "$", 
               "productoUId": "0", 
               "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
            }, 
            "operacionUId": "101", 
            "subCuenta": "", 
            "idOperacionFmt": "000000040_005", 
            "estado": "Normal" 
         } ] 
      }, 
      "tarjetaUId": "3" 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "976", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadas", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "13:15:07", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta de debito. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentasAsociadasTD | sBDCuentasAsociadasTD | Listado de cuentas asociadas. 

Los campos del tipo de dato estructurado sBDCuentasAsociadasTD son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 
cuentas | sBDCuentaAsociadaTD | Datos de cuenta asociada. 

Los campos del tipo de dato estructurado sBDCuentaAsociadaTD son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal. 
simboloMoneda | String | Simbolo de moneda. 
subCuenta | String | Nombre de la subcuenta. 
saldo | Double | Saldo de la cuenta. 
estado | String | Descpripción de estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | -----------  
30001 | No se recibió el identificador de tarjeta. 

 
