import { ITicketLocalState } from "../models/ITicketState";
import pnp from "@pnp/pnpjs";
import { CONST } from "../utils/const";
import { Ticket_Mapper } from "./Mapper";

export const createTicket = async (ticketState: ITicketLocalState) => {
  return await pnp.sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.add(Ticket_Mapper(ticketState))
    .then(() => {
      console.log("successfully saved.");
      return true;
    })
    .catch(e => {
      console.log("Error while saving Tiket " + e.message);
      return false;
    });
};
