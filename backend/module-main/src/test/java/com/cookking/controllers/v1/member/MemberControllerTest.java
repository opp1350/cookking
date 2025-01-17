package com.cookking.controllers.v1.member;

import com.cookking.models.member.LoginType;
import com.cookking.models.member.dto.CreateMemberDto;
import com.cookking.models.member.dto.FollowMemberDto;
import com.cookking.models.member.dto.UpdateMemberDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestConstructor;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by marathoner on 2021/07/16.
 */
@ActiveProfiles(profiles = {"local"})
@SpringBootTest
@TestConstructor(autowireMode = TestConstructor.AutowireMode.ALL)
@AutoConfigureMockMvc
class MemberControllerTest {

    private final String URL = "/api/v1/member/";
    private final Long FIRST_ID = 2L;

    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    private CreateMemberDto getCreateMemberDto() {
        return CreateMemberDto.builder()
                .email("test1@gmail.com")
                .loginType(LoginType.NATIVE)
                .build();
    }

    private UpdateMemberDto getUpdateMemberDto() {
        return UpdateMemberDto.builder()
                .id(FIRST_ID)
                .nickName("HELLLLLOOOOOOOO")
                .build();
    }

    private FollowMemberDto getFollowMemberDto() {
        return FollowMemberDto.builder()
                .email("test@naver.com")
                .followingEmail("test@gmail.com")
                .build();
    }

    @Test
    @DisplayName("존재하는 멤버 아이디로 조회")
    void getMemberById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(URL + FIRST_ID).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    @DisplayName("존재하는 멤버 아이디로 조회 - 없는 아이디로 조회")
    void getMemberByNoneId() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get(URL + 999L).accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    @DisplayName("이메일로 1차 생성")
    void saveNewExample() throws Exception {
        String createMemberDtoJson = objectMapper.writeValueAsString(getCreateMemberDto());

        mockMvc.perform(MockMvcRequestBuilders.post(URL)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(createMemberDtoJson))
                .andExpect(MockMvcResultMatchers.status().isCreated());
    }

    @Test
    @DisplayName("멤머 아이디로 닉네임 수정")
    void updateExampleById() throws Exception {
        UpdateMemberDto updateMemberDto = getUpdateMemberDto();
        String updateMemberDtoJson = objectMapper.writeValueAsString(updateMemberDto);

        mockMvc.perform(MockMvcRequestBuilders.put(URL + FIRST_ID)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updateMemberDtoJson))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }

    @Test
    void follow() throws Exception {
        String followMemberDtoJson = objectMapper.writeValueAsString(getFollowMemberDto());

        mockMvc.perform(MockMvcRequestBuilders.post(URL + "follow")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(followMemberDtoJson))
                .andExpect(MockMvcResultMatchers.status().isCreated());
    }

    @Test
    void unFollow() throws Exception {
        String followMemberDtoJson = objectMapper.writeValueAsString(getFollowMemberDto());

        mockMvc.perform(MockMvcRequestBuilders.post(URL + "follow")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(followMemberDtoJson))
                .andExpect(MockMvcResultMatchers.status().isCreated());
    }


}
