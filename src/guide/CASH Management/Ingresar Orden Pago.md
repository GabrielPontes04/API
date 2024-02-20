# Ingresar Orden Pago 

Método para ingresar una orden de pago. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.IngresarOrdenPago | RBTPGC31 | Global 

> Ejemplo de invocación al servicio Ingresar Orden Pago: 

<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_CASHManagement_v1?IngresarOrdenPago' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1' \ 
  -H 'User-Agent: PostmanRuntime/7.16.3' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"contrato":3, 
	"servicio":10, 
	"operacionUId_debito":1, 
	"moneda":101, 
	"importe":1000, 
	"fecha" : "2019-11-06", 
	"listaCampoValor": { 
		"sBTValorCampoCASH": [ 
			{ 
				"tag" : "ORDENANTE_NOM", 
				"valor" : "Francisco Otheguy" 
			} 
		] 
	} 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.IngresarOrdenPago> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:contrato>3</bts:contrato> 
         <bts:servicio>10</bts:servicio> 
         <bts:operacionUId_debito>1</bts:operacionUId_debito> 
         <bts:moneda>101</bts:moneda> 
         <bts:importe>1000</bts:importe> 
         <bts:fecha>2019-11-06</bts:fecha> 
         <bts:listaCampoValor> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>ORDENANTE_NOM</bts:tag> 
               <bts:valor>Francisco Otheguy</bts:valor> 
            </bts:sBTValorCampoCASH> 
         </bts:listaCampoValor> 
      </bts:BTCASHManagement.IngresarOrdenPago> 
   </soapenv:Body> 
</soapenv:Envelope> 

``` 
</code-block> 
</code-group> 
> El POST retornará la siguiente estructura: 

<code-group> 
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
	"ordenId":304, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "4438", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.IngresarOrdenPago", 
        "Fecha": "2018-12-14", 
        "Requerimiento": "", 
        "Hora": "17:00:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.IngresarOrdenPagoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <ordenId>304</ordenId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.IngresarOrdenPago</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>16:15:43</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>672</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.IngresarOrdenPagoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
contrato | Int | Identificador del contrato CASH del cliente. 
servicio | Short | Servicio de pago CASH. 
operacionUId_debito | Long | Operación de débito. 
moneda | Short | Identificador de moneda. 
importe | Double | Importe total. 
fecha | Date | Fecha de pago. 
listaCampoValor | sBTValorCampoCASH | Lista de valores de campos CASH. 

Los campos del tipo de dato estructurado sBTValorCampoCASH son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tag | String | Tag del campo CASH. 
valor | String | Valor del campo CASH. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
ordenId | Long | Identificador de orden CASH. 

### Errores 

Código | Descripción 
----------- | ----------- 
1030770 | No se recupero informacion para la cuenta recibida. 
1030771 | No se recibio importe para la orden. 
1030772 | No se recibio moneda para la orden. 
1030773 | No se recibio fecha para la orden. 

 
