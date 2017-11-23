import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': '"~@angular/material/prebuilt-themes/indigo-pink.css"',
  'body': {
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#efefef',
    'fontFamily': 'Roboto, "Helvetica Neue", sans-serif'
  },
  'mat-input-wrappermat-form-field-wrapper label': {
    'color': 'white'
  },
  'mat-form-field-underline': {
    'backgroundColor': 'white'
  },
  'mat-form-field-ripple': {
    'backgroundColor': 'white'
  },
  'body ui-widget-header': {
    'background': '#3F51B5',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'color': 'white',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3F51B5' }]
  },
  'body ui-datatable ui-datatable-header': {
    'padding': [{ 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 1 }]
  },
  'body ui-datatable ui-datatable-footer': {
    'padding': [{ 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 1 }]
  },
  'body ui-datatable ui-datatable-thead>tr th': {
    'padding': [{ 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.875 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.875 }],
    'backgroundColor': '#ffffff'
  }
});
