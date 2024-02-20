# Habilitar Cheque Electronico 

Método para habilitar un cheque electrónico de una chequera existente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.HabilitarChequeElectronico | RBTPAR30 | Argentina 

> Ejemplo de invocación al método Habilitar Cheque Electronico: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.HabilitarChequeElectronico> 
         <bts:Btinreq> 
           <bts:Device>10</bts:Device> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>ec8CE93AA1</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:numeroCheque>1</bts:numeroCheque> 
         <bts:CUITBeneficiario>342</bts:CUITBeneficiario> 
         <bts:paisBeneficiarioId>845</bts:paisBeneficiarioId> 
         <bts:tipoDocumentoBeneficiarioId>2</bts:tipoDocumentoBeneficiarioId> 
      </bts:BTCuentasCorrientes.HabilitarChequeElectronico> 
   </soapenv:Body> 
</soapenv:Envelope></soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?HabilitarChequeElectronico=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "15", 
	"numeroCheque": "1", 
	"CUITBeneficiario": "342", 
	"paisBeneficiarioId": "845", 
	"tipoDocumentoBeneficiarioId": "2" 
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
      <BTCuentasCorrientes.HabilitarChequeElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>BA</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ec8CE93AA1</Token> 
         </Btinreq> 
         <listaCheques> 
			<sBTChequeElectronico> 
               <beneficiario/> 
               <numeroCheque>0</numeroCheque> 
               <importe>0.00</importe> 
               <numeroChequera>50245</numeroChequera> 
               <CMC7/> 
            </sBTChequeElectronico> 
		 </listaCheques> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2565</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.HabilitarChequeElectronico</Servicio> 
            <Fecha>2019-05-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:40:41</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.HabilitarChequeElectronicoResponse> 
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
	"listaCheques": { 
		"sBTChequeElectronico": { 
            "beneficiario": "", 
            "numeroCheque": "0", 
            "importe": "0.00", 
            "numeroChequera": "50245", 
            "CMC7": "" 
		} 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.HabilitarChequeElectronico", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId	|	Long	|	Identificador único de operación de subcuenta. 
numeroCheque	|	Int	|	Número de cheque a habilitar. 
CUITBeneficiario	|	String	|	CUIT de beneficiario. 
paisBeneficiarioId	|	Short	|	Identificador del pais del beneficiario. 
tipoDocumentoBeneficiarioId	|	Byte	|	Identificador de tipo de documento del beneficiario. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
listaCheques	|	sBTChequeElectronico	|	Lista de cheques. 

Los campos del tipo de dato estructurado sBTChequeElectronico son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
numeroChequera | Long | Numero de chequera electrónica. 
numeroCheque | Long | Numero de cheque electrónico. 
importe | Double | Importe. 
beneficiario | String | Nombre del beneficiario. 
CMC7 | Long | Identificador CMC7 de cheque electrónico. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la operación. 
30002 | No existe registro con el identificador indicado. 

 
