import dinoProfesor from "./dinoProfesor";
import dinoComerciante from "./dinoComerciante";
import dinoCocinero from "././dinoCocinero";
import dinoRanger from "./dinoRanger";
import dinoDetective from "./dinoDetective";
import { injectTransferTools } from "../utils";

dinoProfesor.downstreamAgents = [dinoComerciante, dinoRanger, dinoDetective];
dinoComerciante.downstreamAgents = [dinoProfesor, dinoRanger];
dinoCocinero.downstreamAgents = [dinoProfesor, dinoRanger];
dinoDetective.downstreamAgents = [dinoProfesor, dinoComerciante, dinoRanger];

const agents = injectTransferTools([
  dinoProfesor,
  dinoComerciante,
  dinoCocinero,
  dinoDetective,
]);

export default agents;