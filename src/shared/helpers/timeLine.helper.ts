import { Item } from "../interfaces/interfaces";

export const calculateAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

export const getGenderLabel = (gender: string) => {
  switch (gender) {
    case "F":
      return "Female";
    case "M":
      return "Male";
    default:
      return "Unknown";
  }
};

export const getLabelFromCode = (code: string | number) => {
  const codeNum = code.toString().slice(0, 2);
  const codeNumWithLetter = /[a-zA-Z]/.test(code.toString());

  if (!codeNumWithLetter) {
    if (codeNum == "99") {
      return "E/M";
    } else if (codeNum == "11") {
      return "Surgery";
    } else if (codeNum == "00") {
      return "Anesthesia";
    } else if (codeNum >= "80" && codeNum <= "83") {
      return "Lab";
    } else if (codeNum >= "71" && codeNum <= "73") {
      return "Radiology";
    } else if (codeNum >= "90" && codeNum <= "93") {
      return "Medicine";
    } else if (codeNum == "97") {
      return "Physical Medicine and Rehabilitation";
    } else if (codeNum == "92") {
      return "Ophthalmology";
    } else if (codeNum == "84") {
      return "Chemistry";
    } else {
      return "Diagnostic";
    }
  } else {
    return "Miscellaneous";
  }
};

export const processData = (data: Item[]) => {
  const groupedData: Record<string, any> = {};

  data.forEach((item) => {
    const { dos_from, code, dx1, dx2 } = item;

    if (!groupedData[dos_from]) {
      groupedData[dos_from] = {
        ...item,
        code: [],
        dx1: [],
        dx2: [],
      };
    }

    if (code) {
      groupedData[dos_from].code.push(code);
    }

    if (!groupedData[dos_from].dx1.includes(dx1)) {
      groupedData[dos_from].dx1.push(dx1);
    }

    if (dx2 && !groupedData[dos_from].dx2.includes(dx2)) {
      groupedData[dos_from].dx2.push(dx2);
    }
  });

  return Object.values(groupedData);
};


export const convertToDate = (dateStr: string | undefined): number => {
  if (!dateStr) {
    console.warn("Invalid date string provided:", dateStr);
    return NaN;
  }

  const [day, month, year] = dateStr.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getTime();
};

export const getUniqueLabels = (
  codes: (string | number)[],
  getLabelFromCode: (code: string | number) => string | undefined
): string[] => {
  if (!Array.isArray(codes)) {
    return [];
  }

  return codes.reduce((accumulator: string[], code: string | number) => {
    const label = getLabelFromCode(code);

    if (label && !accumulator.includes(label)) {
      accumulator.push(label);
    }

    return accumulator;
  }, []);
};