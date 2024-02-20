# Obtener Valores Orden 

Método para obtener los valores de los campos Cash recibidos como parametros, si la coleccion se ingresa vacia entonces se devuelven todos los valores. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.ObtenerValoresOrden | RBTPGC32 | Global 

> Ejemplo de invocación al método Obtener Valores Orden: 

<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement.ObtenerValoresOrden' \ 
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
	} 
	"ordenId":304, 
	"numeroLineaOrden":2, 
	"camposCash": { 
      "sBTValorCampoCASH": [ 
            { 
               "tag" : "COMISION", 
               "valor" : "" 
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
      <bts:BTCASHManagement.ObtenerValoresOrden> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:ordenId>304</bts:ordenId> 
         <bts:numeroLineaOrden>2</bts:numeroLineaOrden> 
         <bts:camposCash> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>COMISION</bts:tag> 
               <bts:valor></bts:valor> 
            </bts:sBTValorCampoCASH> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>CSMD005IMP</bts:tag> 
               <bts:valor></bts:valor> 
            </bts:sBTValorCampoCASH> 
         </bts:camposCash> 
      </bts:BTCASHManagement.ObtenerValoresOrden> 
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
	"valoresCamposCash": { 
		"sBTValorCampoCASH": [ 
			{ 
				"tag" : "COMISION", 
				"valor" : "40.00" 
			}, 
			{ 
				"tag" : "CSMD005IMP", 
				"valor" : "1000.00" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "790", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.ObtenerValoresOrden", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "16:48:12", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 

<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.ObtenerValoresOrdenResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <valoresCamposCash> 
            <sBTValorCampoCASH> 
               <tag>COMISION</tag> 
               <valor>40.00</valor> 
            </sBTValorCampoCASH> 
            <sBTValorCampoCASH> 
               <tag>CSMD005IMP</tag> 
               <valor>1000.00</valor> 
            </sBTValorCampoCASH> 
         </valoresCamposCash> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.ObtenerValoresOrden</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>16:31:42</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>676</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.ObtenerValoresOrdenResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
ordenId | Long | Identificador de orden CASH. 
numeroLineaOrden | Int | Numero de línea de orden CASH. 
camposCash | sBTValorCampoCASH | Lista de campos CASH a devolver valor. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
valoresCamposCash | sBTValorCampoCASH | Lista de valores de campos CASH. 

Los campos del tipo de dato estructurado sBTValorCampoCASH tiene son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tag | String | Tag del campo CASH. 
valor | String | Valor del campo CASH. 

### Errores 

Código | Descripción 
----------- | ----------- 
1030753 | No se encontro la orden para el identificador recibido. 

 
