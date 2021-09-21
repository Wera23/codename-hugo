import moment from "moment";

export const formatData = (date: string): string => {
    return moment.utc(date, "DD.MM.YYYY").format("DD.MM.YYYY");
  };