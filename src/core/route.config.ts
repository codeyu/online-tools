import { AppHtmlFormatter, AppJsonFormatter } from '../formatters';
import { AppHome } from './home';
// import { AppDevPending } from './dev-pending';

export interface RouteConfigItem {
  path: string;
  name: string;
  component?: any;
  children?: RouteConfigItem[];
}

export const routeConfigs: RouteConfigItem[] = [
  {
    path: 'home',
    name: 'Home',
    component: AppHome
  },
  {
    path: 'formatters',
    name: 'Formatters',
    component: null,
    children: [
      {
        path: 'json-formatter',
        name: 'JSON Formatter',
        component: AppJsonFormatter
      },
      {
        path: 'html-formatter',
        name: 'HTML Formatter',
        component: AppHtmlFormatter
      },
      /* {
        path: 'xml-formatter',
        name: 'XML Formatter',
        component: AppDevPending
        // component: AppXmlFormatter
      },
      {
        path: 'sql-formatter',
        name: 'SQL Formatter',
        component: AppDevPending
        // component: AppSqlFormatter
      },
      {
        path: 'batch-formatter',
        name: 'Bath Formatter',
        component: AppDevPending
        // component: AppBatchFormatter
      } */
    ]
  },
  /* {
    path: 'validators',
    name: 'Validators',
    children: [
      {
        path: 'json-validator',
        name: 'JSON Validator'
      },
      {
        path: 'html-validator',
        name: 'HTML Validator'
      },
      {
        path: 'xml-validator',
        name: 'XML Validator - XSD'
      },
      {
        path: 'xpath-tester',
        name: 'XPath Tester'
      },
      {
        path: 'credit-card-number-generator-validator',
        name: 'Credit Card Number Generator & Validator'
      },
      {
        path: 'regular-expression-tester',
        name: 'Regular Expression Tester'
      },
      {
        path: 'java-regular-expression-tester',
        name: 'Java Regular Expression Tester'
      },
      {
        path: 'cron--expression-tester-quartz',
        name: 'Cron Expression Generator — Quartz'
      }
    ]
  },
  {
    path: 'encoder-decoders',
    name: 'Encoders & Decoders',
    children: [
      {
        path: 'url-encoder-decoder',
        name: 'URL Encoder & Decoder'
      },
      {
        path: 'base64-encoder-decoder',
        name: 'Base64 Encoder & Decoder'
      },
      {
        path: 'qr-code-generator',
        name: 'QR Code Generator'
      }
    ]
  },
  {
    path: 'code-minifier',
    name: 'Code Minifiers / Beautifier',
    children: [
      {
        path: 'javascript-beautifier',
        name: 'JavaScript Beautifier'
      },
      {
        path: 'css-beautifier',
        name: 'CSS Beautifier'
      },
      {
        path: 'javascript-minifier',
        name: 'Javascript Minifier'
      },
      {
        path: 'css-minifier',
        name: 'CSS Minifier'
      }
    ]
  } */
]
