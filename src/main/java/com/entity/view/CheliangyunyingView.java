package com.entity.view;

import com.entity.CheliangyunyingEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 车辆运营
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2023-05-04 16:54:23
 */
@TableName("cheliangyunying")
public class CheliangyunyingView  extends CheliangyunyingEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public CheliangyunyingView(){
	}
 
 	public CheliangyunyingView(CheliangyunyingEntity cheliangyunyingEntity){
 	try {
			BeanUtils.copyProperties(this, cheliangyunyingEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
