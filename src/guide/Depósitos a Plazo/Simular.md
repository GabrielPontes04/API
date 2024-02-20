# Simular 

Método para simular el alta de un depósito a plazo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositosAPlazo.Simular | RBTPG074 | Global 

### Configuración Backend 

1) Configuración de productos válidos: 

	* Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | Valor incremental 
Correlativo 2 | Módulo 
Correlativo 3 | Tipo de operación 
Valor específico 1 | Moneda 
Valor específico 2 | Papel 
Importe específico 1 | Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario) 
Importe específico 2 | Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario) 
Importe específico 3 | Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior) 

> Ejemplo de invocación al método Simular: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.Simular> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:monto>1000</bts:monto> 
         <bts:productoUId>103</bts:productoUId> 
         <bts:plazo>360</bts:plazo> 
      </bts:BTDepositosAPlazo.Simular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Simular=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: e47433ff-563b-4c72-89ee-bc163180c9ae' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 161, 
   "monto": 000, 
   "productoUId": 103, 
   "plazo": 360 
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
      <BTDepositosAPlazo.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <fechaAlta>2018-10-09</fechaAlta> 
         <fechaVencimiento>2019-10-09</fechaVencimiento> 
         <intereses>1001.78</intereses> 
         <tasa>0.18</tasa> 
         <simulacionUId>1</simulacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>941</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.Simular</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:53:52</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.SimularResponse> 
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
   "fechaAlta": "2018-10-09", 
   "fechaVencimiento": "2019-10-09", 
   "intereses": "1001.78", 
   "tasa": "0.18", 
   "simulacionUId": "21", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "946", 
      "Estado": "OK", 
      "Servicio": "BTDepositosAPlazo.Simular", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "18:10:30", 
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
monto | Double | Monto del depósito. 
productoUId | Long | Identificador único de producto. 
plazo | Int | Plazo del DPF. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaAlta | Date | Fecha de alta. 
fechaVencimiento | Date | Fecha en que vencería el DPF. 
intereses | Double | Intereses. 
tasa | Double | Tasa. 
operacionUId | Long | Identificador único de operación de la simulación. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | El monto es de ingreso obligatorio. 
30002 | El Plazo es de ingreso obligatorio. 
30003 | No se recibió el identificador de la Cuenta. 
30004 | No se recibió el identificador del Producto. 

 
