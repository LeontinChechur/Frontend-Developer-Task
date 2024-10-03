import { MockDataRow } from "../interfaces/interfaces";

export const generateMockData = (rowCount: number): MockDataRow[] => {
  const mockData = [];

  for (let i = 0; i < rowCount; i++) {
    mockData.push({
      id: i + 1,
      dob: `01/${(i % 12) + 1}/199${Math.floor(i / 12)}`,
      gender: i % 2 === 0 ? "M" : "F",
      billing_class: i % 3 === 0 ? "professional" : "institutional",
      patient_id: 320360301 + i,
      line: i + 1,
      dos_from: `01/01/202${Math.floor(i / 10)}`,
      code: 99214 + (i % 10),
      units: Math.ceil(Math.random() * 5),
      charges: 20000 + (i * 1000),
      allowed: 18000 + (i * 800),
      benefit: 17000 + (i * 750),
      copay: i % 2 === 0 ? 500 : 0,
      revcode: `RC${i + 1}`,
      rend_provider_id: 13900 + i,
      dx1: `D${Math.floor(Math.random() * 100)}`,
      dx2: i % 2 === 0 ? `D${Math.floor(Math.random() * 100)}` : "",
      field15: `Field15-${i + 1}`,
      field16: `Field16-${i + 1}`,
      field17: `Field17-${i + 1}`,
      field18: `Field18-${i + 1}`,
      field19: `Field19-${i + 1}`,
      field20: `Field20-${i + 1}`,
      field21: `Field21-${i + 1}`,
      field22: `Field22-${i + 1}`,
      field23: `Field23-${i + 1}`,
      field24: `Field24-${i + 1}`,
      field25: `Field25-${i + 1}`,
      field26: `Field26-${i + 1}`,
      field27: `Field27-${i + 1}`,
      field28: `Field28-${i + 1}`,
      field29: `Field29-${i + 1}`,
      field30: `Field30-${i + 1}`,
    });
  }
  
  return mockData;
};
