import { MockDataRow } from "../interfaces/interfaces";

export const generateMockData = (rowCount: number): MockDataRow[] => {
  const mockData = [];

  for (let i = 0; i < rowCount; i++) {
    mockData.push({
      id: i + 1,
      name: `Name ${i + 1}`,
      field1: `Field1-${i + 1}`,
      field2: `Field2-${i + 1}`,
      field3: `Field3-${i + 1}`,
      field4: `Field4-${i + 1}`,
      field5: `Field5-${i + 1}`,
      field6: `Field6-${i + 1}`,
      field7: `Field7-${i + 1}`,
      field8: `Field8-${i + 1}`,
      field9: `Field9-${i + 1}`,
      field10: `Field10-${i + 1}`,
      field11: `Field11-${i + 1}`,
      field12: `Field12-${i + 1}`,
      field13: `Field13-${i + 1}`,
      field14: `Field14-${i + 1}`,
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
