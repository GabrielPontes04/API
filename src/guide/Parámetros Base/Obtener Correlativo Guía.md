# Obtener Correlativo Guía 

Método para obtener los datos de un correlativo de una determinada guía de procesos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTParametrosBase.ObtenerCorrelativoGuia | RBTPG053 | Institucional 

> Ejemplo de invocación al método Obtener Correlativo Guía: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerCorrelativoGuia> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:codigo>50</bts:codigo> 
         <bts:correlativo>1</bts:correlativo> 
      </bts:BTParametrosBase.ObtenerCorrelativoGuia> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"codigo": "50", 
	"correlativo": "1" 
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
      <BTParametrosBase.ObtenerCorrelativoGuiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>43f21ff61cCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtCorrelativo> 
            <descripcion>Depósitos Efectivo Ctas Vista</descripcion> 
            <importeEspecifico>5.00</importeEspecifico> 
            <valorEspecifico>50</valorEspecifico> 
            <correlativo>1</correlativo> 
         </sdtCorrelativo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>593</Numero> 
            <Servicio>BTParametrosBase.ObtenerCorrelativoGuia</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-11</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:51:13</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerCorrelativoGuiaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtCorrelativo": { 
	  "descripcion": "Depósitos Efectivo Ctas Vista", 
	  "importeEspecifico": "5.00", 
	  "valorEspecifico": "50", 
	  "correlativo": "1" 
	}, 
	"Btoutreq": { 
	  "Numero": "593", 
	  "Servicio": "BTParametrosBase.ObtenerCorrelativoGuia", 
	  "Estado": "OK", 
	  "Fecha": "2020-03-11", 
	  "Requerimiento": "1", 
	  "Hora": "11:51:13", 
	  "Canal": "BTDIGITAL" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
empresaId | Short | Código de empresa [Hidden]. 
codigo | Long | Código de la Guía de Procesos. 
correlativo | Short | Correlativo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCorrelativo | sBTCorrelativoGuia | Datos de la guía de proceso. 

Los campos del tipo de dato estructurado sBTCorrelativoGuia son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo | Short | Correlativo de la guía. 
descripcion | String | Descripción del correlativo. 
valorEspecifico | Long | Valor específico del correlativo. 
importeEspecifico | Double | Importe específico del correlativo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió código de guía. 
40001 | No existe el correlativo. 

 
