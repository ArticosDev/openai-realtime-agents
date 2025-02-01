import dinoProfesor from "./dinoProfesor";
import dinoComerciante from "./dinoComerciante";
import dinoCocinero from "././dinoCocinero";
import dinoRanger from "./dinoRanger";
import dinoDetective from "./dinoDetective";
import { injectTransferTools } from "../utils";

dinoProfesor.downstreamAgents = [dinoComerciante, dinoRanger, dinoCocinero, dinoDetective];
dinoRanger.downstreamAgents = [dinoComerciante, dinoProfesor, dinoCocinero, dinoDetective];
dinoComerciante.downstreamAgents = [dinoProfesor, dinoRanger, dinoCocinero, dinoDetective];
dinoCocinero.downstreamAgents = [dinoComerciante, dinoRanger, dinoProfesor, dinoDetective];
dinoDetective.downstreamAgents = [dinoComerciante, dinoRanger, dinoCocinero, dinoProfesor];

const agents = injectTransferTools([
  dinoProfesor,
  dinoComerciante,
  dinoCocinero,
  dinoRanger,
  dinoDetective,
]);

export default agents;