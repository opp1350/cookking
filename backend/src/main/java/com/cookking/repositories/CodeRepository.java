package com.cookking.repositories;

import com.cookking.models.code.Code;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by minsang on 2021/08/28
 */
public interface CodeRepository extends JpaRepository<Code, Long> {
}
