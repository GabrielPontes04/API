# Obtener Concepto 

Método para obtener los conceptos de los programas de personas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerConcepto | RBTPG529 | Global 

> Ejemplo de invocación al método Obtener Concepto: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerConcepto> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token> 
         </bts:Btinreq> 
         <bts:programa>HDECOCPD</bts:programa> 
         <bts:conceptoId>11</bts:conceptoId> 
      </bts:BTPersonas.ObtenerConcepto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConcepto=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "programa":"HDECOCPD", 
   "conceptoId": 11 
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
      <BTPersonas.ObtenerConceptoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>DF1F942C6EC60E8B95BBEA69</Token> 
         </Btinreq> 
         <sdtValorCampo> 
            <sBTValorCampo> 
               <descripcion>Cliente</descripcion> 
               <identificador>1</identificador> 
            </sBTValorCampo> 
            <sBTValorCampo> 
               <descripcion>Agencia</descripcion> 
               <identificador>2</identificador> 
            </sBTValorCampo> 
         </sdtValorCampo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16846</Numero> 
            <Servicio>BTPersonas.ObtenerConcepto</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-26</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>11:44:45</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerConceptoResponse> 
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
   "sdtValorCampo": { 
        "sBTValorCampo": [ 
        { 
            "descripcion": "Cliente", 
            "identificador": 1 
        }, 
        { 
            "descripcion": "Agencia", 
            "identificador": 2 
        } 
        ] 
    },  
   "Erroresnegocio": { 
       "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.ObtenerConcepto", 
       "Fecha": "2023-12-18", 
       "Requerimiento": "", 
       "Hora": "01:48:53", 
       "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
programa | String | Nombre del programa. 
conceptoId | Long | Identificador del concepto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtValorCampo | sBTValorCampo | Coleccion de conceptos del programa. 

Los campos del tipo de dato estructurado sBTValorCampo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción. 
identificador | Int | Identificador. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el nombre del programa. 
30002 | No se recibió el identificador del campo. 

 
