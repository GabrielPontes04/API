# Actualizar FATCA 

Método para modificar la información FATCA de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ActualizarFATCA | RBTPCO11 | Colombia 

> Ejemplo de invocación al método Actualizar FATCA: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarFATCA> 
         <bts:Btinreq> 
            <bts:Token>042638a184CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>42</bts:personaUId> 
         <bts:sdtInformacionFATCA> 
            <bts:ingresoBrutoEEUU>N</bts:ingresoBrutoEEUU> 
            <bts:residenciasFiscales> 
               <bts:sBTPCOResidenciaFiscal> 
                  <bts:paisId></bts:paisId> 
                  <bts:pais></bts:pais> 
                  <bts:codigoTIN></bts:codigoTIN> 
                  <bts:correlativo></bts:correlativo> 
               </bts:sBTPCOResidenciaFiscal> 
            </bts:residenciasFiscales> 
            <bts:permanencia183Dias>N</bts:permanencia183Dias> 
            <bts:tieneGreenCard>N</bts:tieneGreenCard> 
            <bts:residenciaMasPaises>N</bts:residenciaMasPaises> 
            <bts:codigoTIN>ABCDEF</bts:codigoTIN> 
            <bts:pagoFuenteEEUU>N</bts:pagoFuenteEEUU> 
         </bts:sdtInformacionFATCA> 
      </bts:BTPersonas.ActualizarFATCA> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarFATCA \ 
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
	"personaUId": "42", 
	"sdtInformacionFATCA": { 
	  "ingresoBrutoEEUU": "N", 
	  "permanencia183Dias": "N", 
	  "tieneGreenCard": "N", 
	  "residenciaMasPaises": "N", 
	  "codigoTIN": "ABCDEF", 
	  "pagoFuenteEEUU": "N", 
	  "residenciasFiscales": { 
		"sBTPCOResidenciaFiscal": { 
		} 
	  }, 
	} 
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
      <BTPersonas.ActualizarFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <resultado>NON US Person</resultado> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2064</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ActualizarFATCA</Servicio> 
            <Fecha>2020-03-10</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:31:11</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarFATCAResponse> 
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
   "resultado": "NON US Person", 
   "Btoutreq": { 
      "Numero": "2064", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ActualizarFATCA", 
      "Requerimiento": "1", 
      "Fecha": "2020-03-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "07:31:11" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
sdtInformacionFATCA | sBTPCOInformacionFATCA | Datos FATCA de la persona. 

Los campos del tipo de dato estructurado sBTPCOInformacionFATCA son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
permanencia183Dias | String | Permanencia de más de 183 días en el último año (S/N). 
tieneGreenCard | String | Poseedor de la tarjeta verde o "Green Card" de los EEUU (S/N). 
pagoFuenteEEUU | String | Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N). 
ingresoBrutoEEUU | String | Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N). 
codigoTIN | String | Código TIN. 
residenciaMasPaises | String | Residencia en más paises. 
residenciasFiscales | sBTPCOResidenciasFiscales | Listado de residencias. 

Los campos del tipo de dato estructurado sBTPCOResidenciasFiscales son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo | Short | Número de correlativo. 
paisId | Short | Identificador de país. 
pais | String | Nombre del pais. 
codigoTIN | String | Código TIN. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
resultado | String | Resultado FATCA. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de persona. 
30002 | Error - Datos duplicados. 
40001 | Debe ingresar al menos una Residencia Fiscal. 
40002 | El país [Número de identificador] ingresado no es válido. 
40004 | No se puede ingresar residencias fiscales. 
40005 | No existe el registro. 
40006 | No existe el país indicado. 
40007 | No existe el tipo de documento indicado. 
40007 | No debe ingresar correlativo para residencia. 
40007 | Se ingresó la misma residencia dos veces. 

 
