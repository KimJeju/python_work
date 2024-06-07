from fastapi import APIRouter

# 사용자 정의모듈 임포트 에러로 경로명 수동 지정
import sys
sys.path.append('/Users/kimkunhwi/Documents/Projects/python_work/crime_dash_board/crime_dash_board_server/branch_crime_app')

# 사용자 정의 모듈
import branch_crime_util 

router = APIRouter(
    prefix="/crime_branch",
    tags=["crime_branch"]
)

@router.get("/")
def default_crime_branch():
    default_crime_data = branch_crime_util.get_default_crime_branch_data()
    return default_crime_data

@router.get("/seleted")
def selected_crime_branch(year:str, branch:int):
    default_crime_data = branch_crime_util.get_selected_crime_branch_data(year,branch)
    return default_crime_data

@router.get('/categorize')
def categorize_crime_branch(year:str, branch:int, category:str):
    categorize_crime_data = branch_crime_util.get_categorize_crime_branch(year=year, branch=branch, category=category)
    return categorize_crime_data

@router.get('/dynamic_subject')
def dynamic_subject_crime_data(year:str, branch:int, category:str, subject:str):
    dynamic_subject_crime_data = branch_crime_util.get_dynamic_subject_crime_data(year,branch,category,subject)
    return dynamic_subject_crime_data

@router.get('/number_of_occurrences')
def number_of_occurrences_crime_data():
    occurrences_crime_data = branch_crime_util.get_all_total_branch_number_of_occurrences()
    return occurrences_crime_data