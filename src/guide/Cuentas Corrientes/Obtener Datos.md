# Obtener Datos 

Método para obtener los datos de un producto cuenta corriente en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerDatos | RBTPG009 | Global 

> Ejemplo de invocación al método Obtener datos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 78cd760f-5ec8-ae9c-5780-0564a89b999d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 142 
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
      <BTCuentasCorrientes.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentaCorriente> 
            <cobraIntereses>S</cobraIntereses> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
            </producto> 
            <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT> 
            <saldoPorConfirmar>0.00</saldoPorConfirmar> 
            <sobregiroAutorizado>N</sobregiroAutorizado> 
            <descPaquete/> 
            <idOperacionFmt>000000027_001</idOperacionFmt> 
            <ejecutivo>Instalador</ejecutivo> 
            <saldoCobertura>15786.45</saldoCobertura> 
            <pagaInteresSobregiro>N</pagaInteresSobregiro> 
            <saldoDisponible>26601092.87</saldoDisponible> 
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos> 
            <saldoBloqueado>0.00</saldoBloqueado> 
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio> 
            <frecuenciaEmisionEC>Mensual</frecuenciaEmisionEC> 
            <operacionUId>9</operacionUId> 
            <chequeras/> 
            <diasSobregiro>0</diasSobregiro> 
            <saldoContable>26585306.42</saldoContable> 
            <estado>Normal</estado> 
            <fechaApertura>2013-12-01</fechaApertura> 
            <sucursal>Casa Matriz</sucursal> 
            <pagaComisEstadoCuenta/> 
            <paquete>N</paquete> 
         </sdtCuentaCorriente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>925</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerDatos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:30:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerDatosResponse> 
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
    "sdtCuentaCorriente": { 
        "cobraIntereses": "", 
        "producto": { 
            "papel": "", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F" 
        }, 
        "idOperacionBT": "0010000100115000000000000000002700000000000326001", 
        "saldoPorConfirmar": "0.00", 
        "sobregiroAutorizado": "", 
        "descPaquete": "", 
        "idOperacionFmt": "000000027_000", 
        "ejecutivo": "Instalador", 
        "saldoCobertura": "0.00", 
        "pagaInteresSobregiro": "", 
        "saldoDisponible": "-174180.15", 
        "pagaComisCantMovimientos": "", 
        "saldoBloqueado": "0.00", 
        "pagaComisBajoPromedio": "", 
        "frecuenciaEmisionEC": "", 
        "operacionUId": "142", 
        "chequeras": "", 
        "diasSobregiro": "1", 
        "saldoContable": "-174180.15", 
        "estado": "Normal", 
        "fechaApertura": "2018-05-18", 
        "sucursal": "Sucursal Beta", 
        "pagaComisEstadoCuenta": "", 
        "paquete": "N" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "926", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerDatos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:31:29", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentaCorriente | sBTCuentaCorriente | Datos del producto. 

Los campos del tipo de dato estructurado sBTCuentaCorriente son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del producto. 
sucursal | String | Nombre de la sucursal de alta. 
estado | String | Descrición de estado de la operación. 
ejecutivo | String | Nombre de ejecutivo de alta. 
fechaApertura | Date | Fecha de alta. 
saldoContable | Double | Saldo total. 
saldoDisponible | Double | Saldo disponible. 
saldoBloqueado | Double | Saldo bloqueado. 
saldoPorConfirmar | Double | Saldo pendiente de confirmación. 
saldoCobertura | Double | Saldo de cobertura. 
paquete | String | ¿Tiene paquete? (S/N). 
descPaquete | String | Descripción de paquete. 
pagaComisBajoPromedio | String | ¿Paga comisión por bajo promedio? (S/N). 
pagaComisCantMovimientos | String | ¿Paga comisión por cantidad de movimientos? (S/N). 
pagaComisEstadoCuenta | String | ¿Paga Comisión por estado de cuenta? (S/N). 
sobregiroAutorizado | String | ¿Sobregiro autorizado? (S/N). 
diasSobregiro | Short | Días de Sobregiro. 
cobraIntereses | String | ¿Cobra intereses? (S/N). 
chequeras | String | Datos de la chequera. 
frecuenciaEmisionEC | String | Frecuencia de emisión de estado de cuenta. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el identificador: [Número de identificador]. 
30003 | La operación ingresada no corresponde a una cuenta Corriente. 

 
