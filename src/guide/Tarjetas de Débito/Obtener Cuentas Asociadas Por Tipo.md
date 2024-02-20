# Obtener Cuentas Asociadas Por Tipo 

Método para obtener un listado de las cuentas del tipo ingresado para una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo | RBTPG448 | Global 

> Ejemplo de invocación al método Obtener Cuentas Asociadas Por Tipo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>B086B798299A7DB5B8310AAA</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUID>2000001957</bts:tarjetaUID> 
         <bts:tipoDeCuenta>?</bts:tipoDeCuenta> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadasPorTipo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "B086B798299A7DB5B8310AAA", 
          "Device": "GL" 
        }, 
        "tarjetaUID": 2000001957, 
        "tipoDeCuenta": "?" 
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
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>B086B798299A7DB5B8310AAA</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sdtCuentasAsociadasTD> 
            <tarjetaUId>2000001957</tarjetaUId> 
            <cuentas> 
               <SdtsBTCuentaAsociadaTD> 
                  <operacionUId>10216</operacionUId> 
                  <idOperacionFmt>000000040_008</idOperacionFmt> 
                  <producto> 
                     <productoUId>93</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                     <moneda>S/.</moneda> 
                     <papel/> 
                  </producto> 
                  <sucursal>Sucursal Cusco</sucursal> 
                  <simboloMoneda>S/.</simboloMoneda> 
                  <subCuenta/> 
                  <tipoDeCuenta>1</tipoDeCuenta> 
                  <saldo>10003628.81</saldo> 
                  <estado>CUENTAS INACTIVAS</estado> 
               </SdtsBTCuentaAsociadaTD> 
            </cuentas> 
         </sdtCuentasAsociadasTD> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo</Servicio> 
            <Fecha>2022-11-30</Fecha> 
            <Hora>17:25:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>513</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "B086B798299A7DB5B8310AAA", 
          "Device": "GL" 
        }, 
        "sdtCuentasAsociadasTD": { 
          "tarjetaUId": 2000001957, 
          "cuentas": { 
            "SdtsBTCuentaAsociadaTD": { 
              "operacionUId": 10216, 
              "idOperacionFmt": "000000040_008", 
              "producto": { 
                "productoUId": 93, 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
                "moneda": "S/.", 
                "papel": "" 
              }, 
              "sucursal": "Sucursal Cusco", 
              "simboloMoneda": "S/.", 
              "subCuenta": "", 
              "tipoDeCuenta": 1, 
              "saldo": 10003628.81, 
              "estado": "CUENTAS INACTIVAS" 
            } 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo", 
          "Fecha": "2022-11-30", 
          "Hora": "17:25:57", 
          "Requerimiento": 1, 
          "Numero": 513, 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta. 
tipoDeCuenta | Short | Tipo de cuenta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentasAsociadasTD | sBTCuentasAsociadasTD | Listado de cuentas asociadas. 

Los campos del tipo de dato estructurado sBTCuentasAsociadasTD son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador único de tarjeta.. 
cuentas | sBTCuentaAsociadaTD | Datos cuenta asociada. 

Los campos del tipo de dato estructurado sBTCuentaAsociadaTD son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de Operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
producto | sBTProducto | Datos producto. 
sucursal | String | Sucursal. 
simboloMoneda | String | Símbolo de la moneda. 
subCuenta | String | Sub cuenta. 
tipoDeCuenta | Short | Tipo de cuenta. 
saldo | Double | Saldo. 
estado | String | Estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el Identificador de cuenta. 

 
