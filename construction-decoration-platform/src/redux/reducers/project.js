import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import ProjectApi from "../../api/projectApi"
import { toast } from "react-toastify";


export const createProject = createAsyncThunk(
  "project/createProject",
   async (data) => {
      const result = await ProjectApi.createProject(data);
   }
);

export const getProject = createAsyncThunk(
  "project/getProject",
  async() => {
    const listProject = await ProjectApi.getProject();
    return listProject
  }
)

export const deleteProject = createAsyncThunk(
  "project/deleteProject", 
  async (id,thunkApi) => {
    const deleteProject = await ProjectApi.deleteProject(id)

    if(deleteProject.status === 200) {
      toast.success("Xóa dự án thành công");
      thunkApi.dispatch(getProject())
    } else {
      toast.error("Xóa dự án thất bại");
    }
    return deleteProject
})

export const getCategoriesCity = createAsyncThunk(
  "project/getCategoriesCity",
  async() => {
    const categoriesCity = await ProjectApi.getCategoriesCity();
    return categoriesCity.data
    
  }
)

export const getOneProject = createAsyncThunk(
  "project/getOneProject",
  async (id) => {
    const project = await ProjectApi.getOneProject(id);
    return  project;
  }
);

export const getSupplier = createAsyncThunk(
  "project/getSupplier",
  async () => {
    const supplier = await ProjectApi.getSupplier();
    return  supplier;
  }
);


export const getStyleType = createAsyncThunk(
  "project/getStyleType",
  async () => {
    const styleType = await ProjectApi.getStyleType();
    return  styleType;
  }
);

export const getProjectType = createAsyncThunk(
  "project/getProjectType",
  async () => {
    const projectType = await ProjectApi.getProjectType();
    return  projectType;
  }
);

export const updateProject = createAsyncThunk(
  "project/updateProject",
  async (data) => {
    const updateProject = await ProjectApi.updateProject(data);
    return  updateProject;
  }
);

export const getProjectByCategory = createAsyncThunk(
  "project/getProjectByCategory",
  async (data) => {
    const projectByCategory = await ProjectApi.getProjectByCategory(data);
    return  projectByCategory;
  }
);

const newSlice = createSlice({
  name: "project",
  initialState: {
    loadingProject: false,
    projectList: [],
    categoryCity: [],
    project: [],
    supplier: [],
    typeStyle: [],
    typeProject: [],
    allProjectByCategory: []
  },
  reducers: {},
  extraReducers: {

    [createProject.pending]: (state) => {
      state.loadingProject = true;
    },
    [createProject.rejected]: (state) => {
      state.loadingProject = false;
    },
    [createProject.fulfilled]: (state, action) => {
      state.loadingProject = false;
    },

    [getProject.pending]: (state) => {
      state.loadingProject = true;
    },
    [getProject.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getProject.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.projectList = action.payload.data
    },

    [getCategoriesCity.pending]: (state) => {
      state.loadingProject = true;
    },
    [getCategoriesCity.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getCategoriesCity.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.categoryCity = action.payload
    },


    [getOneProject.pending]: (state) => {
      state.loadingProject = true;
    },
    [getOneProject.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getOneProject.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.project = action.payload.data;

    },


    [getSupplier.pending]: (state) => {
      state.loadingProject = true;
    },
    [getSupplier.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getSupplier.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.supplier = action.payload.data;
    },

    [getStyleType.pending]: (state) => {
      state.loadingProject = true;
    },
    [getStyleType.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getStyleType.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.typeStyle = action.payload.data;
    },


    [getProjectType.pending]: (state) => {
      state.loadingProject = true;
    },
    [getProjectType.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getProjectType.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.typeProject = action.payload.data;
    },

    [getProjectByCategory.pending]: (state) => {
      state.loadingProject = true;
    },
    [getProjectByCategory.rejected]: (state) => {
      state.loadingProject = false;
    },
    [getProjectByCategory.fulfilled]: (state, action) => {
      state.loadingProject = false;
      state.allProjectByCategory = action.payload.data
    },

  },
});

export default newSlice;