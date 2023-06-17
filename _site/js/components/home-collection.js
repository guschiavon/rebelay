/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'a62cc4-2.myshopify.com',
        storefrontAccessToken: '983947fd572e3bbea6878e087152335f',
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: '449981546818',
          node: document.getElementById('collection-component-1687004279969'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                  },
                  "img": {
                    "height": "calc(100% - 15px)",
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "0"
                  },
                  "imgWrapper": {
                    "padding-top": "calc(75% + 15px)",
                    "position": "relative",
                    "height": "0"
                  }
                },
                "title": {
                  "font-family": "Manrope, sans-serif"
                },
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#d4a716"
                  },
                  "background-color": "#ecb918",
                  ":focus": {
                    "background-color": "#d4a716"
                  },
                  "border-radius": "11px",
                  "padding-left": "30px",
                  "padding-right": "30px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                },
                "price": {
                  "font-family": "Manrope, sans-serif"
                },
                "compareAt": {
                  "font-family": "Manrope, sans-serif"
                },
                "unitPrice": {
                  "font-family": "Manrope, sans-serif"
                }
              },
              "buttonDestination": "modal",
              "contents": {
                "options": false
              },
              "text": {
                "button": "View product"
              },
              "googleFonts": [
                "Manrope"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#d4a716"
                  },
                  "background-color": "#ecb918",
                  ":focus": {
                    "background-color": "#d4a716"
                  },
                  "border-radius": "11px",
                  "padding-left": "30px",
                  "padding-right": "30px"
                },
                "quantityInput": {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                },
                "title": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "bold",
                  "tracking": "2px",
                  "font-size": "26px",
                  "color": "#dfa30d"
                },
                "price": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": "#4c4c4c"
                },
                "compareAt": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "unitPrice": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "description": {
                  "font-family": "Manrope, sans-serif",
                  "font-weight": "thin",
                  "font-size": "14px"
                }
              },
              "googleFonts": [
                "Manrope"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {
              "styles": {
                "label": {
                  "font-family": "Manrope, sans-serif"
                },
                "select": {
                  "font-family": "Manrope, sans-serif"
                }
              },
              "googleFonts": [
                "Manrope"
              ]
            },
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Manrope, sans-serif",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#d4a716"
                  },
                  "background-color": "#ecb918",
                  ":focus": {
                    "background-color": "#d4a716"
                  },
                  "border-radius": "11px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false,
              "googleFonts": [
                "Manrope"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Manrope, sans-serif",
                  "background-color": "#ecb918",
                  ":hover": {
                    "background-color": "#d4a716"
                  },
                  ":focus": {
                    "background-color": "#d4a716"
                  }
                },
                "count": {
                  "font-size": "16px",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                "iconPath": {
                  "fill": "#000000"
                }
              },
              "googleFonts": [
                "Manrope"
              ]
            }
          },
        });
      });
    }
  })();
/*]]>*/