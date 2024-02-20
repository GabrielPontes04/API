# Agregar Beneficiario 

Método para agregar un beneficiario a una Cuenta Vista. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.AgregarBeneficiario | RBTPG316 | Global 

> Ejemplo de invocación al método Agregar Beneficiario: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.AgregarBeneficiario> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>6fc29caa9d4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>2</bts:operacionUId> 
         <bts:sdtBeneficiarios> 
            <bts:sBTBeneficiario> 
               <bts:parentesco></bts:parentesco> 
               <bts:participacion>100</bts:participacion> 
               <bts:nombre>PRUEBA</bts:nombre> 
               <bts:correlativo>1</bts:correlativo> 
               <bts:parentescoId>1</bts:parentescoId> 
            </bts:sBTBeneficiario> 
         </bts:sdtBeneficiarios> 
      </bts:BTCuentasVista.AgregarBeneficiario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AgregarBeneficiario=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": "1", 
          "Device": "AC", 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Token": "6fc29caa9d4A8B5C60A82434" 
	}, 
	"operacionUId": "2", 
	"sdtBeneficiarios": { 
	  "sBTBeneficiario": { 
		"parentesco": "", 
		"participacion": "100", 
		"nombre": "PRUEBA", 
		"correlativo": "1", 
		"parentescoId": "1" 
	  } 
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
      <BTCuentasVista.AgregarBeneficiarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6fc29caa9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10403</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.AgregarBeneficiario</Servicio> 
            <Fecha>2021-01-29</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:10:17</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.AgregarBeneficiarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "MINSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "6fc29caa9d4A8B5C60A82434" 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
	"Btoutreq": { 
	  "Numero": "10403", 
	  "Estado": "OK", 
	  "Servicio": "BTCuentasVista.AgregarBeneficiario", 
	  "Fecha": "2021-01-29", 
	  "Requerimiento": "1", 
	  "Hora": "13:10:17", 
	  "Canal": "BTDIGITAL" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 
sdtBeneficiarios | sBTBeneficiario | Listado de beneficiarios a agregar. 

Los campos del tipo de dato estructurado sBTBeneficiario son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
correlativo | Short | Correlativo del beneficiario. 
nombre | String | Nombre beneficiario. 
parentescoId | Short | Identificador del parentesco. 
parentesco | String | Parentesco. 
participacion | Double | Porcentaje de participación. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30002 | No se recibió el identificador único de Operacion. 
30003 | No se recuperó la Operacion para el Identificador: ? 
30004 | La operación ingresada no corresponde a una cuenta vista. 
30011 | Nombre Beneficiario Requerido. 
30012 | Porcentaje Participacion Requerido. 
30013 | No existe identificador de parentesco. 
30014 | El porcentaje de participación acumulado difiere del 100%. 
30015 | El identificador de parentesco ingresado no es válido. 
30016 | El porcentaje de participación acumulado no puede superar el 100%. 



 
