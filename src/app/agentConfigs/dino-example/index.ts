import expertoDinosaurios from './dino-experto';
import vendedorDinosaurios from './dino-vendedor';


import { injectTransferTools } from '../utils';

expertoDinosaurios.downstreamAgents = [vendedorDinosaurios]
expertoDinosaurios.downstreamAgents = [expertoDinosaurios]


const agents = injectTransferTools([expertoDinosaurios,vendedorDinosaurios]);

export default agents;