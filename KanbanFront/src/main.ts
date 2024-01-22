import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCfEx3QXxbf1x0ZFFMYVhbRH5PIiBoS35RckViWHpfdnVRRmlfUE10");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
