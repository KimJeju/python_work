import pandas as pd;

# 페이지 로딩 시 사용될 디폴트 메서드
def get_default_crime_branch_data():
    category = ['average','main', 'sub']
    dict_data = {}
    try:
        for i in range(0,3):     
            csv_data = pd.read_csv(f'./templates/crime_data/branch/2024/{category[i]}/crime_report_branch_1_2024_{category[i]}_crime_data.csv')
            df = pd.DataFrame(csv_data)
            df = sort_crime_data(df)
            
            df = df.astype(float)

            dict_data[category[i]] = df
        return dict_data       
    except Exception:
        print(FileNotFoundError)    
        
# 인자 값에 따른 데이터 불러오기 메서드
def get_categorize_crime_branch(year:str, branch:int, category:str):
    dict_data = {}
    try:
        csv_data = pd.read_csv(f'./templates/crime_data/branch/{year}/{category}/crime_report_branch_{branch}_{year}_{category}_crime_data.csv')
        df = pd.DataFrame(csv_data)
        df = sort_crime_data(df)
        
        df = df.astype(float)
        
        dict_data[f"{category} ({year} {branch}분기)"] = df
    
        return dict_data
    except Exception:
        print(FileNotFoundError)    

# 데이터 정리 메서드
def sort_crime_data(data : pd.DataFrame):
    try:
        data = data.transpose()
        data.rename(columns=data.iloc[0], inplace=True)
        data = data.drop(data.index[0])
                        
        return data
    except Exception:
        print(FileNotFoundError)    
