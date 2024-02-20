# Traspasar Entre Cuentas Mismo Titular (diferentes monedas) 

Método para registrar en el sistema un traspaso entre cuentas del mismo cliente.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.TraspasarMismoTitularDiferentesMonedas | RBTPG272 | Global 

###Configuración Backend  
1) Definir la transacción de traspaso, teniendo en cuenta que:  

* La cuenta vista origen se almacena en el preformato 1  

* La cuenta vista destino en el preformato 2  

* El importe a transferir se almacena en el preformato 1 

* Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal  

2) Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):  

* Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino  

> Ejemplo de invocación al servicio de Traspasar Entre Cuentas Mismo Titular (diferentes monedas): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">    <soapenv:Header/>    
	<soapenv:Body>        
		<bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>  
			 <bts:Btinreq>        
				<bts:Device>AV</bts:Device> 
				<bts:Usuario>MINSTALADOR</bts:Usuario> 
				<bts:Requerimiento></bts:Requerimiento> 
				<bts:Canal>BTDIGITAL</bts:Canal> 
				<bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
			</bts:Btinreq> 
			<bts:clienteUId>21</bts:clienteUId> 
			<bts:sdtTraspaso> 
				<bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
				<bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
				<bts:monedaId></bts:monedaId>    
				<bts:concepto>Traspaso</bts:concepto>  
				<bts:importeDebito>5000</bts:importeDebito> 
				<bts:importeCredito>500</bts:importeCredito>    
			</bts:sdtTraspaso> 
		</bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>  
	</soapenv:Body> 
</soapenv:Envelope>  
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarMismoTitularDiferentesMonedas \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Requerimiento": "1", 
		"Device": "GP", 
		"Token": "b4ae55b35c4A8B5C60A82434", 
		"Usuario": "MINSTALADOR", 
		"Canal": "BTDIGITAL" 
	}, 
	"clienteUId": "21", 
	"sdtTraspaso":  
	  { 
		"operacionUIdOrigen": "281", 
		"importeDebito": "5000", 
		"importeCredito": "500", 
		"operacionUIdDestino": "282", 
		"monedaId": "", 
		"concepto": "Traspaso", 
	  }, 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">   
	<SOAP-ENV:Body>       
		<BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
			<Btinreq>      
				<Device>AV</Device>     
				<Usuario>MINSTALADOR</Usuario>      
				<Requerimiento/>        
				<Canal>BTDIGITAL</Canal>        
				<Token>268b6d23eb4A8B5C60A82434</Token>    
			</Btinreq>      
			<sdtResultadoTraspaso> 
				<operacionUIdOrigen>281</operacionUIdOrigen>            
				<idMovimiento>0010000100050007003720180706</idMovimiento>  
				<operacionUIdDestino>282</operacionUIdDestino>       
				<saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>     
				<movimientoUId>141</movimientoUId>   
			</sdtResultadoTraspaso>       
			<Erroresnegocio></Erroresnegocio>  
			<Btoutreq>           
				<Numero>864</Numero>   
				<Estado>OK</Estado>      
				<Servicio>BTCuentasVista.TraspasarMismoTitularDiferentesMonedas</Servicio> 
				<Requerimiento/>       
				<Fecha>2017-12-18</Fecha> 
				<Hora>17:07:19</Hora>       
				<Canal>BTDIGITAL</Canal>        
			</Btoutreq>       
		</BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse> 
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
	"sdtResultadoTraspaso":  
	  { 
		"operacionUIdOrigen": "281", 
		"idMovimiento": "0010000100050007003720180706", 
		"operacionUIdDestino": "282", 
		"saldoOperacionOrigen": "7432900.28", 
		"movimientoUId": "141", 
	  }, 
	"Btoutreq": { 
		"Numero": "103", 
		"Estado": "OK", 
		"Servicio": "BTCuentasVista.TraspasarMismoTitularDiferentesMonedas", 
		"Requerimiento": "1", 
		"Fecha": "2019-07-22", 
		"Canal": "BTDIGITAL", 
		"Hora": "16:00:37" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador de cliente.  
sdtTraspaso | sBTTraspaso | Datos del Traspaso.  

Los campos del tipo de dato estructurado sBTTraspaso son los siguientes:  

Campo |   Tipo  | Comentarios  
--------- | ----------- | ----------- 
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.  
operacionUIdDestino | Long | Identificador de operación de destino del traspaso.  
monedaId | Short | Identificador de Moneda.  
importeDebito | Double | Importe a debitar de la operación origen. 
importeCredito | Double | Importe a acreditar a la operación destino. 
concepto | String | Concepto del Traspaso. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtResultadoTraspaso | sBTResultadoTraspasoDatos | Resultado del traspaso. 

Los campos del tipo de dato estructurado sBTResultadoTraspasoDatos son los siguientes:  

Campo |   Tipo  | Comentarios  
--------- | ----------- | ----------- 
operacionUIdOrigen | Long | Identificador de operación de origen del traspaso.  
operacionUIdDestino | Long	| Identificador de operación de destino del traspaso.  
saldoOperacionOrigen | Double | Saldo Actual de operación de origen. 
movimientoUId |	Long | Identificador de Movimiento.  
idMovimiento | String | Identificador de Movimiento String.  

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de operación de origen. 
30002 | No se recibió el identificador único de operación de destino. 
30004 | No se recuperó la operación origen para el Identificador: [Número de identificador]. 
30006 | No se recibió el identificador de persona. 
30007 | Debe ingresar importe a acreditar. 
30008 | No se recuperó la operación destino para el Identificador: [Número de identificador]. 
30009 | Debe ingresar importe a debitar. 
31003 | No existe registro para el identificador único. 

ECHO está desactivado.
