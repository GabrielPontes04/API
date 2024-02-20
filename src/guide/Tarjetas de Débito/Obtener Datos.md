# Obtener Datos 

Método para obtener los datos de un producto de tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerDatos | RBTPG016 | Global 

> Ejemplo de invocación al método Obtener Datos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>3</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 8ab15c2a-49b2-bedc-bcdf-df8d950d94a9' \ 
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
      <BTTarjetasDeDebito.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEntidadTarjetaDebito> 
            <limites></limites> 
            <paquete>N</paquete> 
            <diasHastaVencimiento>2730</diasHastaVencimiento> 
            <tarjetaUId>3</tarjetaUId> 
            <estadoPlastico>ENTREGADO</estadoPlastico> 
            <descPaquete/> 
            <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta> 
            <estadoTarjeta>Activa</estadoTarjeta> 
            <numeroTarjeta>5010730101000000098</numeroTarjeta> 
            <fechaVencimiento>2026-03-31</fechaVencimiento> 
            <sucursal>Sucursal Beta</sucursal> 
            <nombreTarjeta>PEREZ SOSA JUAN</nombreTarjeta> 
         </sdtEntidadTarjetaDebito> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>936</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerDatos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:40:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerDatosResponse> 
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
   "sdtEntidadTarjetaDebito": { 
      "limites": { 
         "sBDLimitesTarjeta.it": [] 
      }, 
      "paquete": "N", 
      "diasHastaVencimiento": "2730", 
      "tarjetaUId": "3", 
      "estadoPlastico": "ENTREGADO", 
      "descPaquete": "", 
      "tipoTarjeta": "MAESTRO NOMINADA", 
      "estadoTarjeta": "Activa", 
      "numeroTarjeta": "5010730101000000098", 
      "fechaVencimiento": "2026-03-31", 
      "sucursal": "Sucursal Beta", 
      "nombreTarjeta": "PEREZ SOSA JUAN" 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "937", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.ObtenerDatos", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "17:41:23", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtEntidadTarjetaDebito | sBDTarjetaDebito | Datos de tarjeta de débito. 

Los campos del tipo de dato estructurado sBDTarjetaDebito son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 
numeroTarjeta | String | Número de tarjeta. 
tipoTarjeta |  String | Tipo de tarjeta. 
sucursal | String | Nombre de la sucursal. 
nombreTarjeta | String | Nombre de la tarjeta. 
fechaVencimiento | Date | Fecha de vecnimiento. 
estadoTarjeta | String | Descripción de estado de la tarjeta. 
estadoPlastico | String | Descripción de estado del plastico. 
diasHastaVencimiento | Int | Días restantes para el vencimiento. 
paquete | String | ¿Tiene paquete? (S/N). 
descPaquete | String | Descripción de paquete. 
limites | sBDLimitesTarjeta | Listado de limites de la tarjeta. 

###Versión V2R2 

Los campos del tipo de dato estructurado sBDLimitesTarjeta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción del limite. 
moneda | String | Símbolo de la moneda. 
monto | Double | Monto del limite. 

###Versión V2R3 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción del limite. 
moneda | String | Símbolo de la moneda. 
limiteChip | Double | Monto del limite por chip. 
limiteBandaMagnetica | Double | Monto del limite por banda magnética. 
limiteNoPresencial | Double | Monto del limite presencial. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de tarjeta. 

 
