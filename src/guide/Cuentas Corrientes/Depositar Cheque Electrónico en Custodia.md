# Depositar Cheque Electrónico en Custodia 

Método para depositar bajo custodia un cheque electrónico. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia | RBTPAR32 | Argentina 

> Ejemplo de invocación al método Depositar Cheque Electrónico En Custodia: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia> 
         <bts:Btinreq> 
           <bts:Device>10</bts:Device> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>ec8CE93AA1</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:importe>3434</bts:importe> 
         <bts:bancoLibradorId></bts:bancoLibradorId> 
         <bts:sucursalLibradoraId></bts:sucursalLibradoraId> 
         <bts:numeroCheque></bts:numeroCheque> 
         <bts:CUITBeneficiario></bts:CUITBeneficiario> 
         <bts:tipoDocumentoBeneficiarioId></bts:tipoDocumentoBeneficiarioId> 
         <bts:paisBeneficiarioId></bts:paisBeneficiarioId> 
         <bts:fechaVencimiento></bts:fechaVencimiento> 
      </bts:BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia> 
   </soapenv:Body> 
</soapenv:Envelope></soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?DepositarChequeElectronicoEnCustodia' \ 
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
	"importe": "3434", 
	"bancoLibradorId": "", 
	"sucursalLibradoraId": "", 
	"numeroCheque": "", 
	"CUITBeneficiario": "", 
	"tipoDocumentoBeneficiarioId": "", 
	"paisBeneficiarioId": "", 
	"fechaVencimiento": "" 
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
      <BTCuentasCorrientes.DepositarChequeElectronicoEnCustodiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>BA</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ec8CE93AA1</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2565</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia</Servicio> 
            <Fecha>2019-05-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:40:41</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.DepositarChequeElectronicoEnCustodiaResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.DepositarChequeElectronicoEnCustodia", 
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
importe	|	Double	|	Importe. 
numeroCheque	|	Int	|	Número de cheque a emitir. 
bancoLibradorId	|	Short	|	Identificador de banco librador. 
sucursalLibradoraId	|	Short	|	Identificador de sucursal del banco librador. 
CUITBeneficiario	|	String	|	CUIT beneficiario. 
paisBeneficiarioId	|	Long	|	Identificador del país del beneficiario. 
tipoDocumentoBeneficiarioId	|	Long	|	Identificador del tipo de documento del beneficiario. 

### Datos de salida 

No aplica 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la operación. 
30002 | No existe registro con el identificador indicado. 

 
