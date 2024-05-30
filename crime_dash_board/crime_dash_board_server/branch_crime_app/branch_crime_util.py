import pandas as pd;

# 페이지 로딩 시 사용될 디폴트 메서드
def get_default_crime_branch_data():
    category = ['average','main', 'sub']
    dict_data = {}
    try:
        for i in range(len(category)):            
            csv_data = pd.read_csv(f'./templates/crime_data/branch/2024/category/{category[i]}/crime_report_branch_1_2024_{category[i]}_category.csv')

            df = pd.DataFrame(csv_data)
                                    
            dict_data[category[i]] = df
        return dict_data        
    except Exception:
        print(FileNotFoundError)    
        
# 인자 값에 따른 데이터 불러오기 메서드
def get_categorize_crime_branch(year:str, branch:int, category:str):
    try:
        dict_data = {}
    
        csv_data = pd.read_csv(f'./templates/crime_data/branch/{year}/category/{category}/crime_report_branch_{branch}_2024_{category}_category.csv')
    
        df = pd.DataFrame(csv_data)
        dict_data[f"{category} ({year} {branch}분기)"] = df
    
        return dict_data
    except Exception:
        print(FileNotFoundError)    

