# Obtener FATCA 

Método para obtener la información FATCA de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerFATCA | RBTPCO12 | Colombia 

> Ejemplo de invocación al método Obtener FATCA: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerFATCA> 
         <bts:Btinreq> 
            <bts:Token>bbf6bf228fCD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>41</bts:personaUId> 
      </bts:BTPersonas.ObtenerFATCA> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerFATCA \ 
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
	"personaUId": "41" 
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
      <BTPersonas.ObtenerFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bbf6bf228fCD285A89A23FBE</Token> 
         </Btinreq> 
         <resultado>US Person</resultado> 
         <sdtInformacionFATCA> 
            <ingresoBrutoEEUU>N</ingresoBrutoEEUU> 
            <residenciasFiscales> 
               <sBTPCOResidenciaFiscal> 
                  <paisId>53</paisId> 
                  <pais>ARABIA SAUDITA</pais> 
                  <codigoTIN>AAASSS</codigoTIN> 
                  <correlativo>1</correlativo> 
               </sBTPCOResidenciaFiscal> 
               <sBTPCOResidenciaFiscal> 
                  <paisId>845</paisId> 
                  <pais>URUGUAY</pais> 
                  <codigoTIN>UUUYYY</codigoTIN> 
                  <correlativo>2</correlativo> 
               </sBTPCOResidenciaFiscal> 
            </residenciasFiscales> 
            <permanencia183Dias>S</permanencia183Dias> 
            <residenciaMasPaises>S</residenciaMasPaises> 
            <tieneGreenCard>S</tieneGreenCard> 
            <codigoTIN>ABCDEF</codigoTIN> 
            <pagoFuenteEEUU>N</pagoFuenteEEUU> 
         </sdtInformacionFATCA> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1729</Numero> 
            <Servicio>BTPersonas.ObtenerFATCA</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-03-05</Fecha> 
            <Hora>13:10:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerFATCAResponse> 
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
   "sdtInformacionFATCA": { 
      "ingresoBrutoEEUU": "N", 
      "permanencia183Dias": "S", 
      "residenciaMasPaises": "S", 
      "tieneGreenCard": "S", 
      "codigoTIN": "ABCDEF", 
      "pagoFuenteEEUU": "N", 
      "residenciasFiscales": { 
         "sBTPCOResidenciaFiscal": [ 
         { 
            "paisId": "53", 
            "pais": "ARABIA SAUDITA", 
            "codigoTIN": "AAASSS", 
            "correlativo": "1" 
         }, 
         { 
            "paisId": "845", 
            "pais": "URUGUAY", 
            "codigoTIN": "UUUYYY", 
            "correlativo": "2" 
         } 
         ] 
      }, 
   }, 
   "Btoutreq": { 
      "Numero": "1729", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerFATCA", 
      "Requerimiento": "1", 
      "Fecha": "2020-03-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:10:51" 
   }, 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
resultado | String | Resultado FATCA. 
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

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de persona. 

 
