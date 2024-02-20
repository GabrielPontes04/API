# Obtener Información Adicional 

Método para obtener la información adicional de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerInformacionAdicional | RBTPG519 | Global 

> Ejemplo de invocación al servicio de Obtener Información Adicional: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>CC0FC33CD93505A538306C08</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>101</bts:personaUId> 
      </bts:BTPersonas.ObtenerInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerInformacionAdicional' \ 
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
	"personaUId": "101", 
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
      <BTPersonas.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>CC0FC33CD93505A538306C08</Token> 
         </Btinreq> 
         <sdtInformacionAdicional> 
            <sBTDatoLista> 
               <clave>HSNGCPF1_TXTAUX2</Clave> 
               <valor/> 
            </sBTDatoLista> 
            <sBTDatoLista> 
               <clave>PER_PAIS_ADICIONAL</Clave> 
               <valor>845</Valor> 
            </sBTDatoLista> 
            <sBTDatoLista> 
               <clave>SUJOBLIGADO</Clave> 
               <valor>N</Valor> 
            </sBTDatoLista> 
         </sdtInformacionAdicional> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10475</Numero> 
            <Servicio>BTPersonas.ObtenerInformacionAdicional</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-09</Fecha> 
            <Hora>10:24:57</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerInformacionAdicionalResponse> 
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
   "sdtInformacionAdicional": { 
      "sBTDatoLista": [ 
      { 
         "clave": "HSNGCPF1_TXTAUX2", 
         "valor": "" 
      }, 
      { 
          "clave": "PER_PAIS_ADICIONAL", 
          "valor": "845" 
      } 
	  { 
          "clave": "SUJOBLIGADO", 
          "valor": "N" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-09", 
      "Canal": "BTDIGITAL", 
      "Hora": "11:21:52" 
   } 
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
sdtInformacionAdicional | sBTDatoLista | Información Adicional de datos. 

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de persona. 
30013 | No existe registro para el identificador único. 

 
