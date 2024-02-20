# Obtener Cuentas de Ahorro (Saldo Contable) 

Método para obtener las cuentas de ahorro de un cliente, junto con el saldo contable de cada una. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerCuentasAhorro | RBTPG006 | Global 

### Configuración Backend 

1) Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 2 
Correlativo 2 | 1 
Valor específico 1 | Identificador del módulo a incluir. 

2) Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | 2 
Correlativo 2 | 2 
Valor específico 1 | Módulo del tipo de operación a excluir. 
Valor específico 2 | Tipo de operación a excluir. 

> Ejemplo de invocación al método Obtener Cuentas de Ahorro (Saldo Contable): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerCuentasAhorro> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
      </bts:BTClientes.ObtenerCuentasAhorro> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasAhorro=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: af7c827f-03c0-79ac-a271-92fb1c13a461' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 161 
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
      <BTClientes.ObtenerCuentasAhorroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPasivos> 
            <sBTProductoPasivo> 
               <operacionUId>281</operacionUId> 
               <idOperacionFmt>000000011_001</idOperacionFmt> 
               <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
               <saldo>7433400.28</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <operacionUId>282</operacionUId> 
               <idOperacionFmt>000000011_004</idOperacionFmt> 
               <idOperacionBT>0010000100021222200000000000001100004000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>USD</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Sucursal Beta</sucursal> 
               <subCuenta/> 
               <saldo>0.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
         </sdtProductosPasivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>779</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerCuentasAhorro</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>11:41:09</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerCuentasAhorroResponse> 
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
    "sdtProductosPasivos": { 
        "sBTProductoPasivo": [ 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "PESOS", 
                "operacionUId": "281", 
                "saldo": "7433400.28", 
                "idOperacionFmt": "000000011_001", 
                "idOperacionBT": "0010100000021000000000000000001100001000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "", 
                "operacionUId": "282", 
                "saldo": "0.00", 
                "idOperacionFmt": "000000011_004", 
                "idOperacionBT": "0010000100021222200000000000001100004000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "USD", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Sucursal Beta" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "780", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerCuentasAhorro", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "11:42:37", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductosPasivos | sBTProductoPasivo | Listado de cajas de ahorro. 

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String  (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
tipoProducto | String | Tipo de producto. 
sucursal | String | Nombre de la sucursal.. 
subCuenta | String | Nombre de la subcuenta. 
saldo | Double | Saldo contable de la CC. 
estado | String | Descripción de estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recuperó la cuenta para el Identificador. 

 
