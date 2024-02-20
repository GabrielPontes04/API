# Obtener Productos 

Método para devolver una lista de los productos de préstamos. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerProductos | RBTPG078 | Global 

> Ejemplo de invocación al método Obtener Productos: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerProductos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>7f582501004A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPrestamos.ObtenerProductos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTPrestamos.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>7f582501004A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>61</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>62</productoUId> 
               <nombre>Amortización Automática TF_UI</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>63</productoUId> 
               <nombre>Amortización Automática TF_USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>64</productoUId> 
               <nombre>Amortización Automática TV</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>65</productoUId> 
               <nombre>Amortización Automática TV_USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>66</productoUId> 
               <nombre>Amor.Libre Empresa Int.Ad</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>67</productoUId> 
               <nombre>Amort. Libre UI_Empresa</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>68</productoUId> 
               <nombre>Am.Automatica Empresa TF</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>69</productoUId> 
               <nombre>Am.Automatica Empresa UI</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>70</productoUId> 
               <nombre>Am.Automatica Empresa USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>71</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>72</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>73</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>74</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>75</productoUId> 
               <nombre>Amortización Libre TF</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>76</productoUId> 
               <nombre>Amortización Libre TF UI</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>77</productoUId> 
               <nombre>Pmos. Automotores</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>78</productoUId> 
               <nombre>Amortización Micro</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>79</productoUId> 
               <nombre>Plazo Fijo</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>80</productoUId> 
               <nombre>Plazo Fijo Reajustable</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>81</productoUId> 
               <nombre>Plazo Fijo USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>82</productoUId> 
               <nombre>Amortización Automática TF UI</nombre> 
               <moneda>$</moneda> 
               <papel>UI</papel> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>83</productoUId> 
               <nombre>Amortización Automática TF USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>84</productoUId> 
               <nombre>Amort. - S/valor residual.-T/F</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>85</productoUId> 
               <nombre>Amort. - Capital F./Empr.- T/V</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>86</productoUId> 
               <nombre>Irregular o Amort. Libre $</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>87</productoUId> 
               <nombre>Irregular o Amort. Libre</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>88</productoUId> 
               <nombre>Plazo Fijo</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>723</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerProductos</Servicio> 
            <Fecha>2017-11-24</Fecha> 
            <Requerimiento/> 
            <Hora>13:09:53</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerProductosResponse> 
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
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "61", 
                "nombre": "Amortización Automática TF" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "62", 
                "nombre": "Amortización Automática TF_UI" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "63", 
                "nombre": "Amortización Automática TF_USD" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "64", 
                "nombre": "Amortización Automática TV" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "65", 
                "nombre": "Amortización Automática TV_USD" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "66", 
                "nombre": "Amor.Libre Empresa Int.Ad" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "67", 
                "nombre": "Amort. Libre UI_Empresa" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "68", 
                "nombre": "Am.Automatica Empresa TF" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "69", 
                "nombre": "Am.Automatica Empresa UI" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "70", 
                "nombre": "Am.Automatica Empresa USD" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "71", 
                "nombre": "Amortización Automática TF" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "72", 
                "nombre": "Amortización Automática TF" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "73", 
                "nombre": "Amortización Automática TF" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "74", 
                "nombre": "Amortización Automática TF" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "75", 
                "nombre": "Amortización Libre TF" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "76", 
                "nombre": "Amortización Libre TF UI" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "77", 
                "nombre": "Pmos. Automotores" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "78", 
                "nombre": "Amortización Micro" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "79", 
                "nombre": "Plazo Fijo" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "80", 
                "nombre": "Plazo Fijo Reajustable" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "81", 
                "nombre": "Plazo Fijo USD" 
            }, 
            { 
                "papel": "UI", 
                "moneda": "$", 
                "productoUId": "82", 
                "nombre": "Amortización Automática TF UI" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "83", 
                "nombre": "Amortización Automática TF USD" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "84", 
                "nombre": "Amort. - S/valor residual.-T/F" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "85", 
                "nombre": "Amort. - Capital F./Empr.- T/V" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "86", 
                "nombre": "Irregular o Amort. Libre $" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "87", 
                "nombre": "Irregular o Amort. Libre" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "88", 
                "nombre": "Plazo Fijo" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "724", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerProductos", 
        "Fecha": "2017-11-24", 
        "Requerimiento": "", 
        "Hora": "13:13:45", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtProductos | sBTProducto | Listado de productos. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto 
nombre | String | Nombre de producto 
moneda | String | Símbolo de moneda 
papel | String | Símbolo de papel 

### Errores 

No aplica. 

 
