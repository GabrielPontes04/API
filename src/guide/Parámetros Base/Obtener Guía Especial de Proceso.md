# Obtener Guía Especial de Proceso 

Método para obtener los datos de una determinada guía especial de procesos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTParametrosBase.ObtenerGuiaEspecialDeProceso | RBTPG052 | Institucional 

> Ejemplo de invocación al método Obtener Guía Especial de Proceso: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerGuiaEspecialDeProceso> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:codigo>73</bts:codigo> 
      </bts:BTParametrosBase.ObtenerGuiaEspecialDeProceso> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerGuiaEspecialDeProceso \ 
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
	"codigo": "73" 
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
      <BTParametrosBase.ObtenerGuiaEspecialDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>43f21ff61cCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtGuiaEspecialDeProceso> 
            <sBTCorrelativoGuiaEspecial> 
               <correlativo3>0</correlativo3> 
               <correlativo2>539</correlativo2> 
               <descripcion>Prima sin cuenta</descripcion> 
               <correlativo1>50</correlativo1> 
               <valorEspecifico3>0</valorEspecifico3> 
               <valorEspecifico2>0</valorEspecifico2> 
               <valorEspecifico1>0</valorEspecifico1> 
               <importeEspecifico3>0.00</importeEspecifico3> 
               <importeEspecifico2>0.00</importeEspecifico2> 
               <importeEspecifico1>0.00</importeEspecifico1> 
            </sBTCorrelativoGuiaEspecial> 
            <sBTCorrelativoGuiaEspecial> 
               <correlativo3>0</correlativo3> 
               <correlativo2>125</correlativo2> 
               <descripcion>No genera prima</descripcion> 
               <correlativo1>163</correlativo1> 
               <valorEspecifico3>0</valorEspecifico3> 
               <valorEspecifico2>0</valorEspecifico2> 
               <valorEspecifico1>0</valorEspecifico1> 
               <importeEspecifico3>0.00</importeEspecifico3> 
               <importeEspecifico2>0.00</importeEspecifico2> 
               <importeEspecifico1>0.00</importeEspecifico1> 
            </sBTCorrelativoGuiaEspecial> 
         </sdtGuiaEspecialDeProceso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>592</Numero> 
            <Servicio>BTParametrosBase.ObtenerGuiaEspecialDeProceso</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-11</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:37:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerGuiaEspecialDeProcesoResponse> 
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
	"sdtGuiaEspecialDeProceso": { 
	  "sBTCorrelativoGuiaEspecial": [ 
		{ 
		  "correlativo3": "0", 
		  "correlativo2": "539", 
		  "descripcion": "Prima sin cuenta", 
		  "correlativo1": "50", 
		  "valorEspecifico3": "0", 
		  "valorEspecifico2": "0", 
		  "valorEspecifico1": "0", 
		  "importeEspecifico3": "0.00", 
		  "importeEspecifico2": "0.00", 
		  "importeEspecifico1": "0.00" 
		}, 
		{ 
		  "correlativo3": "0", 
		  "correlativo2": "125", 
		  "descripcion": "No genera prima", 
		  "correlativo1": "163", 
		  "valorEspecifico3": "0", 
		  "valorEspecifico2": "0", 
		  "valorEspecifico1": "0", 
		  "importeEspecifico3": "0.00", 
		  "importeEspecifico2": "0.00", 
		  "importeEspecifico1": "0.00" 
		} 
	  ] 
	}, 
	"Btoutreq": { 
		"Numero": "592", 
		"Servicio": "BTParametrosBase.ObtenerGuiaEspecialDeProceso", 
		"Estado": "OK", 
		"Fecha": "2020-03-11", 
		"Requerimiento": "1", 
		"Hora": "11:37:51", 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtGuiaEspecialDeProceso | sBTCorrelativoGuiaEspecial | Listado de datos de la guía especial de proceso. 

Los campos del tipo de dato estructurado sBTCorrelativoGuiaEspecial son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo1 | Short | Correlativo 1. 
correlativo2 | Short | Correlativo 2. 
correlativo3 | Short | Correlativo 3. 
descripcion | String | Descripción. 
valorEspecifico1 | Long | Valor específico 1. 
valorEspecifico2 | Long | Valor específico 2. 
valorEspecifico3 | Long | Valor específico 3. 
importeEspecifico1 | Double | Importe específico 1. 
importeEspecifico2 | Double | Importe específico 2. 
importeEspecifico3 | Double | Importe específico 3. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió código de guía. 
40001 | No existe la guía recibida. 

 
